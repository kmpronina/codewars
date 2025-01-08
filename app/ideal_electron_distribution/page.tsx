"use client";

import { useState } from "react";
import LinkBack from "../_components/LinkBack";
import TaskTitle from "../_components/TaskTitle";

export default function IdealElectronDistribution() {
  const [number, setNumber] = useState<number>(100);

  function atomicNumber(num: number): number[] {
    const electronDistribution = [];
    let currentIterator = 1;
    while (num > 0) {
      const possibleElectrons = 2 * currentIterator ** 2;
      const currentElectrons =
        num - possibleElectrons >= 0 ? possibleElectrons : num;
      electronDistribution.push(currentElectrons);
      num -= currentElectrons;
      currentIterator++;
    }
    return electronDistribution;
  }

  return (
    <div className="flex flex-col gap-10 p-20 font-[family-name:var(--font-geist-sans)] text-gray-900">
      <LinkBack />
      <TaskTitle title="Ideal electron distribution" />
      <input
        type="number"
        value={number}
        className="w-1/4 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      {!number || number <= 0
        ? "Invalid input"
        : atomicNumber(number).map((number, index) =>
            index === 0 ? `${number}` : `, ${number}`
          )}
    </div>
  );
}
