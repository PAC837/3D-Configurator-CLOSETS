import { useMemo } from "react";
import { useDesignStore } from "../store/design";

export default function Canvas2D() {
  const roomWidth = useDesignStore((s) => s.roomWidth);
  const components = useDesignStore((s) => s.components);
  const removeComponent = useDesignStore((s) => s.removeComponent);

  // Simple scale: 4 px per inch (12ft room = 576px)
  const scale = 4;
  const canvasWidthPx = roomWidth * scale;

  const blocks = useMemo(
    () =>
      components.map((c) => {
        const left = c.x * scale;
        const width = c.width * scale;
        const height = 120; // fixed visual height for MVP elevation
        return (
          <div
            key={c.uid}
            className="absolute top-2 rounded-md border border-gray-400 bg-white/90 shadow-sm hover:shadow-md"
            style={{ left, width, height }}
            title={`${c.name} • ${c.width}W x ${c.height}H x ${c.depth}D • $${c.price}`}
            onClick={() => removeComponent(c.uid)}
          >
            <div className="flex h-full flex-col items-center justify-center">
              <div className="text-xs font-medium text-gray-800">{c.name}</div>
              <div className="text-[10px] text-gray-500">{c.width}" W • ${c.price}</div>
              <div className="mt-1 text-[10px] text-gray-400">(click to remove)</div>
            </div>
          </div>
        );
      }),
    [components, removeComponent]
  );

  return (
    <div className="p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm text-gray-600">Room Width: {roomWidth}"</div>
        <div className="text-xs text-gray-400">Auto-snap: left → right</div>
      </div>

      <div className="w-full overflow-x-auto rounded-md border border-gray-200 bg-[linear-gradient(to_right,#f3f4f6_0.5px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_0.5px,transparent_1px)] bg-[size:16px_16px] p-4">
        <div className="relative h-40 bg-gray-50" style={{ width: canvasWidthPx }}>
          {/* Left & right walls */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gray-300" />
          <div className="absolute right-0 top-0 h-full w-1 bg-gray-300" />
          {blocks}
        </div>
      </div>

      <p className="mt-2 text-xs text-gray-500">
        MVP canvas. Components are placed in sequence with left-to-right snapping and simple collision
        avoidance against the room width. Further tools (drag, fillers, end caps) will be added next.
      </p>
    </div>
  );
}
