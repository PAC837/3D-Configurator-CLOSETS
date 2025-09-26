import { useMemo } from "react";
import { useDesignStore } from "../store/design";

export default function PricingPanel() {
  const components = useDesignStore((s) => s.components);
  const materials = useDesignStore((s) => s.materials);

  const { subtotal, materialsAdj, hardwareAdj, total } = useMemo(() => {
    const subtotal = components.reduce((sum, c) => sum + (c.price ?? 0), 0);
    // Very simple adjustment previews (already partially accounted in c.price)
    // Shown here as transparent indicators of material/hardware impact.
    const matAdj =
      /Textured|Walnut|Oak|Teak/i.test(materials.caseMaterial) ? Math.round(subtotal * 0.15) : 0;
    const doorAdj =
      /Painted|Stain|Premium/i.test(materials.doorFinish) ? Math.round(subtotal * 0.1) : 0;
    const hwAdj = /Blum|Hafele|Richelieu/i.test(materials.hardware) ? Math.round(subtotal * 0.05) : 0;

    const materialsAdj = matAdj + doorAdj;
    const total = subtotal + materialsAdj + hwAdj;

    return { subtotal, materialsAdj, hardwareAdj: hwAdj, total };
  }, [components, materials]);

  return (
    <div className="p-3 space-y-2">
      <h2 className="text-sm font-semibold text-gray-700">Pricing</h2>
      <div className="rounded-md border border-gray-200 bg-white p-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Components</span>
          <span className="font-medium">${subtotal.toLocaleString()}</span>
        </div>
        <div className="mt-1 flex justify-between text-gray-600">
          <span>Materials adj.</span>
          <span>+${materialsAdj.toLocaleString()}</span>
        </div>
        <div className="mt-1 flex justify-between text-gray-600">
          <span>Hardware adj.</span>
          <span>+${hardwareAdj.toLocaleString()}</span>
        </div>
        <div className="mt-2 border-t border-gray-200 pt-2 flex justify-between">
          <span className="font-semibold text-gray-800">Total</span>
          <span className="font-semibold">${total.toLocaleString()}</span>
        </div>
      </div>
      <p className="text-xs text-gray-500">
        Pricing updates in real-time as you design. Material/hardware adjustments are illustrative and
        will be replaced by full PAC rules and parameter-driven pricing.
      </p>
    </div>
  );
}
