import { create } from "zustand";
import type { CatalogItem, DesignState, MaterialPalette, PlacedComponent } from "../types";

const DEFAULT_ROOM_WIDTH = 144; // inches (12 ft) for MVP

const defaultMaterials: MaterialPalette = {
  doorStyle: "Shaker",
  doorFinish: "White",
  caseMaterial: "White Melamine",
  hardware: "Blum Soft-Close",
};

// Minimal seed catalog (placeholder examples for MVP)
// Width ranges and base prices are illustrative and will be replaced by PAC data mapping.
const seedCatalog: CatalogItem[] = [
  {
    id: "OPEN-24",
    name: "Open Section 24",
    defaultWidth: 24,
    minWidth: 18,
    maxWidth: 30,
    depth: 14,
    height: 84,
    basePrice: 180,
  },
  {
    id: "DRAW-24-3",
    name: "3 Drawer Section 24",
    defaultWidth: 24,
    minWidth: 21,
    maxWidth: 27,
    depth: 19,
    height: 84,
    basePrice: 420,
  },
  {
    id: "SHOE-24",
    name: "Shoe Shelves 24",
    defaultWidth: 24,
    minWidth: 18,
    maxWidth: 30,
    depth: 14,
    height: 84,
    basePrice: 260,
  },
  {
    id: "HAMP-24",
    name: "Hamper 24",
    defaultWidth: 24,
    minWidth: 24,
    maxWidth: 24,
    depth: 19,
    height: 84,
    basePrice: 380,
  },
];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

// Very simple multipliers for MVP; replace with rule-based pricing later
function materialMultiplier(m: MaterialPalette) {
  let mult = 1;
  if (/Textured|Walnut|Oak|Teak/i.test(m.caseMaterial)) mult += 0.15;
  if (/Painted|Stain|Premium/i.test(m.doorFinish)) mult += 0.1;
  if (/Blum|Hafele|Richelieu/i.test(m.hardware)) mult += 0.05;
  return mult;
}

export const useDesignStore = create<DesignState>((set, get) => ({
  roomWidth: DEFAULT_ROOM_WIDTH,
  activeWall: "A",
  materials: defaultMaterials,
  catalog: seedCatalog,
  components: [],

  setMaterials: (patch) =>
    set((state) => ({
      materials: { ...state.materials, ...patch },
      // Potentially reprice existing components on material changes:
      components: state.components.map((c) => {
        const cat = state.catalog.find((x) => x.id === c.catalogId);
        if (!cat) return c;
        const widthMult = c.width / cat.defaultWidth;
        const priced = cat.basePrice * widthMult * materialMultiplier({ ...state.materials, ...patch });
        return { ...c, price: Math.round(priced) };
      }),
    })),

  addComponent: (catalogId, opts) =>
    set((state) => {
      const cat = state.catalog.find((c) => c.id === catalogId);
      if (!cat) return state;

      const width = Math.min(Math.max(opts?.width ?? cat.defaultWidth, cat.minWidth), cat.maxWidth);

      // Compute next x by stacking left->right
      const nextX = state.components.reduce((acc, c) => Math.max(acc, c.x + c.width), 0);

      // Guard: if it exceeds room width, do nothing for now (later: auto filler/new row)
      if (nextX + width > state.roomWidth) {
        // TODO: later insert filler/end caps or warn user
        return state;
      }

      const m = state.materials;
      const widthMult = width / cat.defaultWidth;
      const price = Math.round(cat.basePrice * widthMult * materialMultiplier(m));

      const placed: PlacedComponent = {
        uid: uid(),
        catalogId: cat.id,
        name: cat.name,
        width,
        depth: cat.depth,
        height: cat.height,
        x: nextX,
        y: 0,
        price,
      };

      return { ...state, components: [...state.components, placed] };
    }),

  removeComponent: (uid) =>
    set((state) => {
      const filtered = state.components.filter((c) => c.uid !== uid);
      return { ...state, components: filtered };
    }),

  clearDesign: () => set((state) => ({ ...state, components: [] })),
}));
