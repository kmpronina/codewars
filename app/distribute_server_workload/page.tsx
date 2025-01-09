"use client";
import { useState } from "react";
import InputNaturalNumber from "../_components/InputNaturalNumber";
import LinkBack from "../_components/LinkBack";
import TaskTitle from "../_components/TaskTitle";
import WrapperWithLabel from "../_components/WrapperWithLabel";

export default function DistributeServerWorkload() {
  const [nodesNumber, setNodesNumber] = useState<number>(1);
  const [workloadsNumber, setWorkloadsNumber] = useState<number>(1);

  function distribute(nodes: number, workload: number): number[][] {
    const distribution = Array.from({ length: nodes }, () => [0]);
    for (let i = 0; i <= workload - 1; i++) {
      distribution[i % nodes][0]++;
    }
    return distribution;
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Distribute server workload" />
      <WrapperWithLabel label="Number of nodes">
        <InputNaturalNumber number={nodesNumber} setNumber={setNodesNumber} />
      </WrapperWithLabel>
      <WrapperWithLabel label="Number of workloads">
        <InputNaturalNumber
          number={workloadsNumber}
          setNumber={setWorkloadsNumber}
        />
      </WrapperWithLabel>

      <WrapperWithLabel label="Distribution">
        <>{distribute(nodesNumber, workloadsNumber)}</>
      </WrapperWithLabel>
    </>
  );
}
