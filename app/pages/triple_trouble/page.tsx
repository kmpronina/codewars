"use client";

import InputNaturalNumber from "@/app/_components/InputNaturalNumber";
import LinkBack from "@/app/_components/LinkBack";
import TaskTitle from "@/app/_components/TaskTitle";
import WrapperWithLabel from "@/app/_components/WrapperWithLabel";
import { useState } from "react";

export default function TripleTrouble() {
  const [number, setNumber] = useState<number>(111000);
  const [number2, setNumber2] = useState<number>(123113);

  function tripleDouble(num1: number, num2: number) {
    for (
      let i = 0;
      i < Math.max(num1.toString().length, num2.toString().length);
      i++
    ) {
      if (
        new RegExp(`${i}{3}`).test(num1.toString()) &&
        new RegExp(`${i}{2}`).test(num2.toString())
      ) {
        return 1;
      }
    }
    return 0;
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Triple trouble" />
      <div>
        Write a function which takes two integers num1 and num2 and returns 1 if
        there is a straight triple of a digit at any place in num1 and also a
        straight double of the same digit in num2. If this isn't the case,
        return 0.
      </div>
      <WrapperWithLabel label="Numbers">
        <div className="flex flex-row gap-2">
          <InputNaturalNumber number={number} setNumber={setNumber} />
          <InputNaturalNumber number={number2} setNumber={setNumber2} />
        </div>
      </WrapperWithLabel>

      <WrapperWithLabel label="Result">
        {tripleDouble(number, number2)}
      </WrapperWithLabel>
    </>
  );
}
