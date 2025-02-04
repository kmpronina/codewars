"use client";

import InputNaturalNumber from "@/app/_components/InputNaturalNumber";
import LinkBack from "@/app/_components/LinkBack";
import TaskTitle from "@/app/_components/TaskTitle";
import WrapperWithLabel from "@/app/_components/WrapperWithLabel";
import { useState } from "react";

export default function TransformToPrime() {
  const [number, setNumber] = useState<number>(3);
  const [number2, setNumber2] = useState<number>(2);
  const [number3, setNumber3] = useState<number>(1);

  function closestNumberToPrime(numbers: number[]): number {
    const isPrime = (num: number) => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    let count = 0;
    while (!isPrime(numbers.reduce((a, b) => a + b, count))) {
      count++;
    }
    return count;
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Transform To Prime" />
      <div>
        Given a list of positive integers, determine the minimum non-negative
        integer that needs to be inserted so that the sum of all elements
        becomes a prime number.
      </div>
      <WrapperWithLabel label="Numbers">
        <div className="flex flex-row gap-2">
          <InputNaturalNumber number={number} setNumber={setNumber} />
          <InputNaturalNumber number={number2} setNumber={setNumber2} />
          <InputNaturalNumber number={number3} setNumber={setNumber3} />
        </div>
      </WrapperWithLabel>

      <WrapperWithLabel label="Result">
        {closestNumberToPrime([number, number2, number3])}
      </WrapperWithLabel>
    </>
  );
}
