"use client";

import { useState } from "react";
import LinkBack from "../../_components/LinkBack";
import TaskTitle from "../../_components/TaskTitle";
import WrapperWithLabel from "../../_components/WrapperWithLabel";
import InputNaturalNumber from "../../_components/InputNaturalNumber";

export default function ParameterOfNumber() {
  const [number, setNumber] = useState<number>(1234);

  function parameterOfNumber(n: number) {
    const gcd = function (a: number, b: number) {
      if (!b) {
        return a;
      }

      return gcd(b, a % b);
    };

    const sum = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
    const product = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc * Number(cur), 1);
    return (sum * product) / gcd(sum, product);
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Simple Fun #223: Parameter Of Number" />
      <div>
        Let's define a parameter of number n as the least common multiple (LCM)
        of the sum of its digits and their product. Calculate the parameter of
        the given number n.
      </div>
      <WrapperWithLabel label="Number">
        <InputNaturalNumber number={number} setNumber={setNumber} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Parameter Of Number">
        {parameterOfNumber(number)}
      </WrapperWithLabel>
    </>
  );
}
