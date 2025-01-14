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
      <div>
        You are a <i>khmmadkhm</i> scientist and you decided to play with
        electron distribution among atom's shells. You know that basic idea of
        electron distribution is that electrons should fill a shell until it's
        holding the maximum number of electrons.
        <ul className="list-disc">
          Rules:
          <li>
            Maximum number of electrons in a shell is distributed with a rule of
            2n^2 (n being position of a shell).
          </li>
          <li>
            For example, maximum number of electrons in 3rd shell is 2*3^2 = 18.
          </li>
          <li> Electrons should fill the lowest level shell first.</li>
          <li>
            If the electrons have completely filled the lowest level shell, the
            other unoccupied electrons will fill the higher level shell and so
            on.
          </li>
        </ul>
      </div>
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
