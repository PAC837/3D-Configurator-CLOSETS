import { useDesignStore } from "../store/design";

export default function CatalogPanel() {
  const catalog = useDesignStore((s) => s.catalog);
  const addComponent = useDesignStore((s) => s.addComponent);

  return (
    <div className="p-3 border-t border-gray-200">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Component Library</h2>
      <div className="space-y-2 max-h-64 overflow-auto pr-1">
        {catalog.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-2"
          >
            <div>
              <div className="text-sm font-medium text-gray-800">{item.name}</div>
              <div className="text-xs text-gray-500">
                {item.defaultWidth}W x {item.height}H x {item.depth}D • ${item.basePrice}
              </div>
            </div>
            <button
              className="rounded-md bg-brand-primary px-2 py-1 text-xs font-medium text-white hover:opacity-90"
              onClick={() => addComponent(item.id)}
              title="Add (auto-snap left→right)"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
