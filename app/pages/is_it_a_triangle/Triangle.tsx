interface TriangleProps {
  a: number;
  b: number;
  c: number;
}

export default function Triangle({ a, b, c }: TriangleProps) {
  const xA = 0,
    yA = 0;
  const xB = c,
    yB = 0;
  const xC = (a ** 2 + c ** 2 - b ** 2) / (2 * c);
  const yC = Math.sqrt(a ** 2 - xC ** 2);

  return (
    <svg width="300" height="300" viewBox="-10 -10 220 220">
      <polygon
        points={`${xA},${yA} ${xB},${yB} ${xC},${yC}`}
        fill="lightblue"
        stroke="blue"
        strokeWidth="0.1"
      />
    </svg>
  );
}
