import MaterialsPanel from "./components/MaterialsPanel";
import CatalogPanel from "./components/CatalogPanel";
import Canvas2D from "./components/Canvas2D";
import PricingPanel from "./components/PricingPanel";
import { useDesignStore } from "./store/design";

export default function App() {
  const clearDesign = useDesignStore((s) => s.clearDesign);
  const components = useDesignStore((s) => s.components);

  return (
    <div className="h-screen w-screen">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-brand-primary" />
          <h1 className="text-base font-semibold text-gray-800">PAC Closets — 2D Configurator (MVP)</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clearDesign}
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 hover:bg-gray-50"
            title="Clear all components"
          >
            Clear Design ({components.length})
          </button>
        </div>
      </header>

      {/* Main layout */}
      <main className="grid h-[calc(100%-48px)] grid-cols-12">
        {/* Left: Materials + Catalog */}
        <aside className="col-span-3 border-r border-gray-200 bg-gray-50">
          <MaterialsPanel />
          <CatalogPanel />
        </aside>

        {/* Center: 2D Canvas */}
        <section className="col-span-6">
          <Canvas2D />
        </section>

        {/* Right: Pricing */}
        <aside className="col-span-3 border-l border-gray-200 bg-gray-50">
          <PricingPanel />
        </aside>
      </main>
    </div>
  );
}
