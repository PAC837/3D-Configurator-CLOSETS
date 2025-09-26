export type MaterialPalette = {
  doorStyle: string;
  doorFinish: string;
  caseMaterial: string;
  hardware: string;
};

export type CatalogItem = {
  id: string;
  name: string;
  defaultWidth: number; // inches
  minWidth: number;
  maxWidth: number;
  depth: number; // inches
  height: number; // inches
  basePrice: number; // USD baseline for defaultWidth
};

export type PlacedComponent = {
  uid: string;
  catalogId: string;
  name: string;
  width: number; // inches
  depth: number; // inches
  height: number; // inches
  x: number; // inches from left wall (auto-snap alignment)
  y: number; // reserved for elevations (0 baseline)
  price: number; // computed
};

export type DesignState = {
  roomWidth: number; // inches
  activeWall: "A";
  materials: MaterialPalette;
  catalog: CatalogItem[];
  components: PlacedComponent[];

  // actions
  setMaterials: (m: Partial<MaterialPalette>) => void;
  addComponent: (catalogId: string, opts?: { width?: number }) => void;
  removeComponent: (uid: string) => void;
  clearDesign: () => void;
};

export type PricingSummary = {
  subtotal: number;
  materialsAdj: number;
  hardwareAdj: number;
  total: number;
};
