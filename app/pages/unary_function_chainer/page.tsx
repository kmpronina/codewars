"use client";

import InputNaturalNumber from "@/app/_components/InputNaturalNumber";
import LinkBack from "@/app/_components/LinkBack";
import TaskTitle from "@/app/_components/TaskTitle";
import WrapperWithLabel from "@/app/_components/WrapperWithLabel";
import { useState } from "react";

export default function UnaryFunctionChainer() {
  const [number, setNumber] = useState<number>(145);

  function chained(functions: ((x: number) => number)[]) {
    return function (a: number) {
      return functions.reduce((acc, fn) => fn(acc), a);
    };
  }

  function a(x: number) {
    return x * 2;
  }
  function b(x: number) {
    return x + 2;
  }
  function c(x: number) {
    return x * 4;
  }
  function d(x: number) {
    return x + 10;
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Unary function chainer" />
      <div>
        Your task is to write a higher order function for chaining together a
        list of unary functions. In other words, it should return a function
        that does a left fold on the given functions.
        <br />
        Functions:
        <ul>
          <li>a = x * 2</li>
          <li>b = x + 2</li>
          <li>c = x * 4</li>
          <li>d = x + 10</li>
        </ul>
      </div>
      <WrapperWithLabel label="Number">
        <InputNaturalNumber number={number} setNumber={setNumber} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Result">
        {chained([a, b, c, d])(number)}
      </WrapperWithLabel>
    </>
  );
}
