"use client";

import { useState } from "react";
import LinkBack from "../../_components/LinkBack";
import TaskTitle from "../../_components/TaskTitle";
import WrapperWithLabel from "../../_components/WrapperWithLabel";
import Button from "../../_components/Button";

export default function PasswordGenerator() {
  const [string, setString] = useState<string>("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function PasswordGenerator() {
    function randomInteger(min: number, max: number) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    const arr = [];
    for (let i = 0; i < Math.floor(randomInteger(60, 200) / 10); i++) {
      arr.push(alphabet[randomInteger(0, 25)]);
    }
    const res = arr.map((item: string | number) => {
      if (randomInteger(0, 100) < 50 && typeof item === "string") {
        item = item.toUpperCase();
      }
      if (randomInteger(0, 100) < 25) {
        item = randomInteger(0, 9);
      }
      return item;
    });

    if (res.join("").match(/[1-9]/) && res.join("").match(/[A-Z]/)) {
      setString(res.join(""));
    } else {
      PasswordGenerator();
    }
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Password generator" />
      <ul className="list-disc">
        You need to write a password generator that meets the following
        criteria:
        <li>6 - 20 characters long</li>
        <li>contains at least one lowercase letter</li>
        <li>contains at least one uppercase letter</li>
        <li> at least one number</li>contains
        <li> only alphanumeric characters (no special characters)</li>contains
        Return the random password as a string.
      </ul>
      <Button label="Create a password" onClick={PasswordGenerator} />

      <WrapperWithLabel label="Password">{string}</WrapperWithLabel>
    </>
  );
}
