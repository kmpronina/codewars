"use client";

import { useState } from "react";
import LinkBack from "../../_components/LinkBack";
import TaskTitle from "../../_components/TaskTitle";
import WrapperWithLabel from "../../_components/WrapperWithLabel";
import InputString from "@/app/_components/InputString";

export default function RepeatedSubstring() {
  const [string, setString] = useState<string>("");

  function checkPrimeString(string: string): string {
    for (let i = 1; i < string.length; i++) {
      if (string.substring(0, i).repeat(string.length / i) === string) {
        return "False";
      }
    }
    return "True";
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Simple Fun #116: Prime String" />
      <div>
        The string is called prime if it cannot be constructed by concatenating
        some (more than one) equal strings together. For example, <q>abac</q> is
        prime, but <q>xyxy</q> is not(<q>xyxy</q>=<q>xy</q>+<q>xy</q>). Given a
        string determine if it is prime or not.
      </div>
      <InputString string={string} setString={setString} />
      <WrapperWithLabel label="Is Prime">
        {checkPrimeString(string)}
      </WrapperWithLabel>
    </>
  );
}
