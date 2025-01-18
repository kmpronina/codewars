"use client";

import { useState } from "react";
import LinkBack from "../_components/LinkBack";
import TaskTitle from "../_components/TaskTitle";
import WrapperWithLabel from "../_components/WrapperWithLabel";
import InputNaturalString from "../_components/InputString";

export default function AlphabetSymmetry() {
  const [string, setString] = useState<string>("");
  const [stringTwo, setStringTwo] = useState<string>("");
  const [stringThree, setStringThree] = useState<string>("");

  function AlphabetSymmetry(arr: string[]): number[] {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const numberOfMatches = new Array(arr.length).fill(0);
    for (const i in arr) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].toLowerCase() === alphabet[j]) {
          numberOfMatches[i]++;
        }
      }
    }
    return numberOfMatches;
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Alphabet symmetry" />
      <div>
        Consider the word <i>abode</i>. We can see that the letter a is in
        position 1 and b is in position 2. In the alphabet, a and b are also in
        positions 1 and 2. Notice also that d and e in abode occupy the
        positions they would occupy in the alphabet, which are positions 4 and
        5.
        <br />
        Given an array of words, return an array of the number of letters that
        occupy their positions in the alphabet for each word.
      </div>
      <WrapperWithLabel label="String 1">
        <InputNaturalString string={string} setString={setString} />
      </WrapperWithLabel>
      <WrapperWithLabel label="String 2">
        <InputNaturalString string={stringTwo} setString={setStringTwo} />
      </WrapperWithLabel>
      <WrapperWithLabel label="String 2">
        <InputNaturalString string={stringThree} setString={setStringThree} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Number of matches">
        {AlphabetSymmetry([string, stringTwo, stringThree]).map(
          (item, index) => (
            <p key={index}>{`String ${index + 1}: ${item}`}</p>
          )
        )}
      </WrapperWithLabel>
    </>
  );
}
