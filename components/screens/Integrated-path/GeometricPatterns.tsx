import React from 'react'
export function GeometricPatterns() {
  return (
    <div className="geometric-bg" aria-hidden="true">
      {/* Hexagon grid pattern */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const x = col * 80 + (row % 2 === 0 ? 0 : 40)
            const y = row * 70
            const points = Array.from(
              {
                length: 6,
              },
              (_, i) => {
                const angle = (Math.PI / 3) * i - Math.PI / 6
                return `${x + 30 * Math.cos(angle)},${y + 30 * Math.sin(angle)}`
              },
            ).join(' ')
            return (
              <polygon
                key={`${row}-${col}`}
                points={points}
                stroke="rgba(255,165,0,0.6)"
                strokeWidth="1"
                fill="none"
              />
            )
          }),
        )}
      </svg>

      {/* Triangle pattern bottom left */}
      <svg
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
        viewBox="0 0 320 320"
        fill="none"
      >
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => {
            const size = 40
            const x = col * size + (row % 2 === 0 ? 0 : size / 2)
            const y = row * (size * 0.866)
            return (
              <polygon
                key={`tri-${row}-${col}`}
                points={`${x},${y + size * 0.866} ${x + size / 2},${y} ${x + size},${y + size * 0.866}`}
                stroke="rgba(100,200,255,0.5)"
                strokeWidth="1"
                fill="none"
              />
            )
          }),
        )}
      </svg>

      {/* Circles pattern */}
      <svg
        className="absolute top-1/2 left-1/4 w-64 h-64 opacity-5"
        viewBox="0 0 256 256"
        fill="none"
      >
        {[20, 40, 60, 80, 100, 120].map((r) => (
          <circle
            key={r}
            cx="128"
            cy="128"
            r={r}
            stroke="rgba(255,100,200,0.8)"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* Diamond grid */}
      <svg
        className="absolute top-1/3 right-1/4 w-48 h-48 opacity-10"
        viewBox="0 0 192 192"
        fill="none"
      >
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const cx = col * 48 + 24
            const cy = row * 48 + 24
            const s = 18
            return (
              <polygon
                key={`dia-${row}-${col}`}
                points={`${cx},${cy - s} ${cx + s},${cy} ${cx},${cy + s} ${cx - s},${cy}`}
                stroke="rgba(150,255,150,0.6)"
                strokeWidth="1"
                fill="none"
              />
            )
          }),
        )}
      </svg>

      {/* Large decorative hexagon top-left */}
      <svg
        className="absolute -top-20 -left-20 w-80 h-80 opacity-5"
        viewBox="0 0 320 320"
        fill="none"
      >
        <polygon
          points="160,20 280,90 280,230 160,300 40,230 40,90"
          stroke="rgba(255,200,0,0.8)"
          strokeWidth="2"
          fill="rgba(255,200,0,0.05)"
        />
        <polygon
          points="160,50 255,105 255,215 160,270 65,215 65,105"
          stroke="rgba(255,200,0,0.5)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Dotted grid */}
      <svg
        className="absolute bottom-1/4 right-1/3 w-48 h-48 opacity-15"
        viewBox="0 0 192 192"
        fill="none"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
          [0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={col * 24 + 12}
              cy={row * 24 + 12}
              r="2"
              fill="rgba(255,150,100,0.8)"
            />
          )),
        )}
      </svg>
    </div>
  )
}
