"use client";

import { useState } from "react";
import LinkBack from "../_components/LinkBack";
import TaskTitle from "../_components/TaskTitle";
import WrapperWithLabel from "../_components/WrapperWithLabel";
import InputNaturalString from "../_components/InputString";

export default function Alphabetized() {
  const [string, setString] = useState<string>("");

  function AlphabetizeIt(s: string): string {
    return s
      .replace(/\s+|\W+|\d+|[_]+/g, "")
      .split("")
      .sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        }
        return 0;
      })
      .join("");
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Alphabetized" />
      <div>
        Re-order the characters of a string, so that they are concatenated into
        a new string in
        <i>case-insensitively-alphabetical-order-of-appearance</i>
        order. Whitespace and punctuation shall simply be removed! The input is
        restricted to contain no numerals and only words containing the english
        alphabet letters.
      </div>
      <WrapperWithLabel label="String">
        <InputNaturalString string={string} setString={setString} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Alphabetized string">
        {AlphabetizeIt(string)}
      </WrapperWithLabel>
    </>
  );
}
