"use client";

import InputNaturalNumber from "@/app/_components/InputNaturalNumber";
import LinkBack from "@/app/_components/LinkBack";
import TaskTitle from "@/app/_components/TaskTitle";
import WrapperWithLabel from "@/app/_components/WrapperWithLabel";
import { useState } from "react";

export default function StrongNumber() {
  const [number, setNumber] = useState<number>(145);

  function StrongNumber(n: number) {
    if (!number || number <= 0) return "Invalid input";
    function factorial(n: number): number {
      if (n === 0) return 1;
      return n != 1 ? n * factorial(n - 1) : 1;
    }

    return n ===
      n
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, curr) => acc + factorial(curr), 0)
      ? "STRONG!!!!"
      : "Not Strong !!";
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Strong number" />
      <div>
        Strong number is a number with the sum of the factorial of its digits is
        equal to the number itself. For example, 145 is strong, because 1! + 4!
        + 5! = 1 + 24 + 120 = 145. Task Given a positive number, find if it is
        strong or not, and return either <q>STRONG!!!!</q> or{" "}
        <q>Not Strong !!</q>. <br />
        Examples:
        <ul className="list-disc">
          <li>
            1 is a strong number, because 1! = 1, so return <q>STRONG!!!!</q>.
          </li>
          <li>
            123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to
            123, so return <q>Not Strong !!</q>.
          </li>
          <li>
            145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145,
            so return <q>STRONG!!!!</q>.
          </li>
          <li>
            150 is not a strong number, because 1! + 5! + 0! = 122 is not equal
            to 150, so return <q>Not Strong !!</q>.
          </li>
        </ul>
      </div>
      <WrapperWithLabel label="Number of electrons">
        <InputNaturalNumber number={number} setNumber={setNumber} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Is it a strong number?">
        {!number || number <= 0 ? "Invalid input" : StrongNumber(number)}
      </WrapperWithLabel>
    </>
  );
}
