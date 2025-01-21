"use client";

import { useMemo, useState } from "react";
import LinkBack from "../../_components/LinkBack";
import TaskTitle from "../../_components/TaskTitle";
import WrapperWithLabel from "../../_components/WrapperWithLabel";
import InputNaturalNumber from "../../_components/InputNaturalNumber";

export default function TriangleNumberCheck() {
  const [number, setNumber] = useState<number>(6);

  function isTriangleNumber(n: number) {
    if (Number.isInteger(Math.sqrt(8 * n + 1))) {
      return true;
    }
    return false;
  }

  function drawATriangleNumber(n: number) {
    const numbarArr = [];
    let currentNumber = 0;

    for (let i = 1; currentNumber < n; i++) {
      const subArray = [];
      for (let j = 0; j < i && currentNumber < n; j++) {
        subArray.push(currentNumber);
        currentNumber++;
      }
      numbarArr.push(subArray);
    }
    return numbarArr;
  }

  const numberOfSpaces = useMemo(() => {
    return Math.round(Number(number.toString().length) / 2) + 1;
  }, [number]);

  return (
    <>
      <LinkBack />
      <TaskTitle title="Triangle number check" />
      <div>
        A triangle number is a number where n objects form an equilateral
        triangle (it's a bit hard to explain). For example, 6 is a triangle
        number because you can arrange 6 objects into an equilateral triangle.
        <br />8 is not a triangle number because 8 objects do not form an
        equilateral triangle. <br /> In other words, the nth triangle number is
        equal to the sum of the n natural numbers from 1 to n.
      </div>
      <WrapperWithLabel label="Number">
        <InputNaturalNumber number={number} setNumber={setNumber} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Is a given input a valid triangle number">
        {isTriangleNumber(number) ? (
          <div>
            {"Yes"}
            <div className="flex flex-col text-center w-fit">
              {drawATriangleNumber(number).map((array, index) => (
                <pre key={index}>
                  {array.map(
                    (arrNumber) =>
                      " ".repeat(
                        numberOfSpaces - (arrNumber.toString().length - 1)
                      ) + arrNumber
                  )}
                </pre>
              ))}
            </div>
          </div>
        ) : (
          "No"
        )}
      </WrapperWithLabel>
    </>
  );
}
