"use client";

import InputString from "@/app/_components/InputString";
import LinkBack from "@/app/_components/LinkBack";
import TaskTitle from "@/app/_components/TaskTitle";
import WrapperWithLabel from "@/app/_components/WrapperWithLabel";
import { useState } from "react";

export default function ValidPhoneNumber() {
  const [string, setString] = useState<string>("(123) 456-7890");

  function ValidPhoneNumber(phoneNumber: string): boolean {
    return /^\(\d{3}\)\ \d{3}\-\d{4}$/.test(phoneNumber);
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Valid Phone Number" />
      <div>
        Write a function that accepts a string, and returns true if it is in the
        form of a phone number. Assume that any integer from 0-9 in any of the
        spots will produce a valid phone number.
        <br />
        Only worry about the following format: (123) 456-7890 (don't forget the
        space after the close parentheses)
      </div>
      <WrapperWithLabel label="Enter phone number">
        <InputString string={string} setString={setString} />
      </WrapperWithLabel>

      <WrapperWithLabel label="Number of matches">
        {ValidPhoneNumber(string)}
      </WrapperWithLabel>
    </>
  );
}
