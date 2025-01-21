"use client";

import { useState } from "react";
import LinkBack from "../../_components/LinkBack";
import TaskTitle from "../../_components/TaskTitle";
import WrapperWithLabel from "../../_components/WrapperWithLabel";
import InputString from "@/app/_components/InputString";

export default function RepeatedSubstring() {
  const [string, setString] = useState<string>("");

  function repeatSubstring(s: string) {
    for (let i = 1; i < s.length; i++) {
      if (s.substring(0, i).repeat(s.length / i) === s) {
        return [s.substring(0, i), s.length / i];
      }
    }
    return [s, 1];
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Password generator" />
      For a given nonempty string s find a minimum substring t and the maximum
      number k, such that the entire string s is equal to t repeated k times.
      The input string consists of lowercase latin letters. Your function should
      return an array [t, k]
      <InputString string={string} setString={setString} />
      <WrapperWithLabel label="Repeated substring">
        {repeatSubstring(string).map((item, index) => (
          <div key={index} className="flex flex-row gap-1">
            {index === repeatSubstring.length - 1
              ? "Substring: " + item
              : "Repeated times: " + item}
          </div>
        ))}
      </WrapperWithLabel>
    </>
  );
}
