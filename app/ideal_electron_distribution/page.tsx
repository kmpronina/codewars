"use client";

import { useState } from "react";
import LinkBack from "../_components/LinkBack";
import TaskTitle from "../_components/TaskTitle";
import WrapperWithLabel from "../_components/WrapperWithLabel";
import InputNaturalNumber from "../_components/InputNaturalNumber";

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
    <>
      <LinkBack />
      <TaskTitle title="Ideal electron distribution" />
      <WrapperWithLabel label="Number of electrons">
        <InputNaturalNumber number={number} setNumber={setNumber} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Electron distribution">
        {!number || number <= 0
          ? "Invalid input"
          : atomicNumber(number).map((number, index) =>
              index === 0 ? `${number}` : `, ${number}`
            )}
      </WrapperWithLabel>
    </>
  );
}
