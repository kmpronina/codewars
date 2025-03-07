"use client";
import LinkBack from "@/app/_components/LinkBack";
import TaskTitle from "@/app/_components/TaskTitle";
import WrapperWithLabel from "@/app/_components/WrapperWithLabel";
import { useState } from "react";
import SelectNumber from "./SelectNumber";
import Triangle from "./Triangle";

export default function IsItATriangle() {
  const [selectedNumber1, setSelectedNumber1] = useState(1);
  const [selectedNumber2, setSelectedNumber2] = useState(1);
  const [selectedNumber3, setSelectedNumber3] = useState(1);

  function isItATriangle(a: number, b: number, c: number) {
    return a + b > c && a + c > b && b + c > a;
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Is it a triangle?" />
      <div>
        Implement a function that accepts 3 integer values a, b, c. The function
        should return true if a triangle can be built with the sides of given
        length and false in any other case.
        <br />
        (In this case, all triangles must have surface greater than 0 to be
        accepted).
      </div>
      <WrapperWithLabel label="Length of triangle sides">
        <div className="flex gap-5">
          <SelectNumber
            selectedNumber={selectedNumber1}
            setSelectedNumber={setSelectedNumber1}
          />
          <SelectNumber
            selectedNumber={selectedNumber2}
            setSelectedNumber={setSelectedNumber2}
          />
          <SelectNumber
            selectedNumber={selectedNumber3}
            setSelectedNumber={setSelectedNumber3}
          />
        </div>
      </WrapperWithLabel>
      <div>
        <WrapperWithLabel label="Possible triangle">
          {isItATriangle(selectedNumber1, selectedNumber2, selectedNumber3) ? (
            <>
              {"Valid triangle"}
              <Triangle
                a={selectedNumber1 * 20}
                b={selectedNumber2 * 20}
                c={selectedNumber3 * 20}
              />
            </>
          ) : (
            "Invalid triangle"
          )}
        </WrapperWithLabel>
      </div>
    </>
  );
}
