import { useDesignStore } from "../store/design";

const selectClass =
  "mt-1 block w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-sm shadow-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary";

export default function MaterialsPanel() {
  const materials = useDesignStore((s) => s.materials);
  const setMaterials = useDesignStore((s) => s.setMaterials);

  return (
    <div className="space-y-3 p-3">
      <h2 className="text-sm font-semibold text-gray-700">Materials & Hardware</h2>

      <div>
        <label className="text-xs text-gray-600">Door Style</label>
        <select
          className={selectClass}
          value={materials.doorStyle}
          onChange={(e) => setMaterials({ doorStyle: e.target.value })}
        >
          <option>Shaker</option>
          <option>Slab</option>
          <option>Raised Panel</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-600">Door Finish</label>
        <select
          className={selectClass}
          value={materials.doorFinish}
          onChange={(e) => setMaterials({ doorFinish: e.target.value })}
        >
          <option>White</option>
          <option>Painted Premium</option>
          <option>Stain Walnut</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-600">Case Material</label>
        <select
          className={selectClass}
          value={materials.caseMaterial}
          onChange={(e) => setMaterials({ caseMaterial: e.target.value })}
        >
          <option>White Melamine</option>
          <option>Textured Oak</option>
          <option>Textured Teak</option>
          <option>Grey Melamine</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-600">Hardware</label>
        <select
          className={selectClass}
          value={materials.hardware}
          onChange={(e) => setMaterials({ hardware: e.target.value })}
        >
          <option>Blum Soft-Close</option>
          <option>Hafele Axilo</option>
          <option>Richelieu Optimiz-R</option>
        </select>
      </div>
    </div>
  );
}
