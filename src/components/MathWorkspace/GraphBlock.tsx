import React from 'react';
import { Download, Sparkles } from 'lucide-react';

interface GraphBlockProps {
  title?: string;
  functions?: string[]; // e.g. ["2*x - 3"]
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  points?: { x: number; y: number; label: string }[];
  className?: string;
}

export const GraphBlock: React.FC<GraphBlockProps> = ({
  title = 'Minh họa hình học trên mặt phẳng tọa độ Oxy',
  functions = ['2*x - 3'],
  xMin = -3,
  xMax = 5,
  yMin = -4,
  yMax = 6,
  points = [
    { x: 0, y: -3, label: 'A(0; -3)' },
    { x: 2, y: 1, label: 'B(2; 1)' },
    { x: 3, y: 3, label: 'C(3; 3)' }
  ],
  className = ''
}) => {
  const width = 460;
  const height = 320;
  const padding = 35;

  const toSvgX = (x: number) => {
    return padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  };

  const toSvgY = (y: number) => {
    return height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);
  };

  const originX = toSvgX(0);
  const originY = toSvgY(0);

  // Generate grid ticks
  const xTicks = [];
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    if (x !== 0) xTicks.push(x);
  }

  const yTicks = [];
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    if (y !== 0) yTicks.push(y);
  }

  // Draw line for y = 2x - 3
  // endpoints:
  const lineX1 = xMin;
  const lineY1 = 2 * lineX1 - 3;
  const lineX2 = xMax;
  const lineY2 = 2 * lineX2 - 3;

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 p-4 shadow-xs ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">Đồ thị hình học</span>
          <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200">
            d: y = 2x - 3 (2x - y = 3)
          </span>
        </div>
      </div>

      <div className="overflow-x-auto flex justify-center bg-slate-50/70 p-2 rounded-xl border border-slate-100">
        <svg width={width} height={height} className="select-none font-mono">
          {/* Grid lines */}
          {xTicks.map(x => (
            <line
              key={`grid-x-${x}`}
              x1={toSvgX(x)}
              y1={padding}
              x2={toSvgX(x)}
              y2={height - padding}
              stroke="#E2E8F0"
              strokeDasharray="2,2"
            />
          ))}
          {yTicks.map(y => (
            <line
              key={`grid-y-${y}`}
              x1={padding}
              y1={toSvgY(y)}
              x2={width - padding}
              y2={toSvgY(y)}
              stroke="#E2E8F0"
              strokeDasharray="2,2"
            />
          ))}

          {/* Coordinate axes */}
          {/* X Axis */}
          <line
            x1={padding}
            y1={originY}
            x2={width - padding + 15}
            y2={originY}
            stroke="#475569"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />
          {/* Y Axis */}
          <line
            x1={originX}
            y1={height - padding}
            x2={originX}
            y2={padding - 15}
            stroke="#475569"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Axis markers & labels */}
          <text x={width - padding + 18} y={originY + 4} fill="#475569" fontSize="12" fontWeight="bold">x</text>
          <text x={originX - 14} y={padding - 10} fill="#475569" fontSize="12" fontWeight="bold">y</text>
          <text x={originX - 12} y={originY + 14} fill="#64748B" fontSize="10">O</text>

          {/* Numbers on axes */}
          {xTicks.map(x => (
            <text key={`tx-${x}`} x={toSvgX(x)} y={originY + 14} textAnchor="middle" fill="#64748B" fontSize="9">
              {x}
            </text>
          ))}
          {yTicks.map(y => (
            <text key={`ty-${y}`} x={originX - 8} y={toSvgY(y) + 3} textAnchor="end" fill="#64748B" fontSize="9">
              {y}
            </text>
          ))}

          {/* Function Line: y = 2x - 3 */}
          <line
            x1={toSvgX(lineX1)}
            y1={toSvgY(lineY1)}
            x2={toSvgX(lineX2)}
            y2={toSvgY(lineY2)}
            stroke="#2563EB"
            strokeWidth="2.5"
          />

          {/* Points on line */}
          {points.map((pt, i) => (
            <g key={i}>
              <circle cx={toSvgX(pt.x)} cy={toSvgY(pt.y)} r="4" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x={toSvgX(pt.x) + 7} y={toSvgY(pt.y) - 6} fill="#1E293B" fontSize="10" fontWeight="bold">
                {pt.label}
              </text>
            </g>
          ))}

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
            </marker>
          </defs>
        </svg>
      </div>

      <p className="text-xs text-slate-500 mt-2 italic text-center">
        Tập hợp tất cả các điểm có tọa độ (x; y) thỏa mãn 2x - y = 3 đều nằm trên đường thẳng d.
      </p>
    </div>
  );
};
