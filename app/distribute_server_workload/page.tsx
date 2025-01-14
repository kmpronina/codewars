"use client";
import { useState } from "react";
import InputNaturalNumber from "../_components/InputNaturalNumber";
import LinkBack from "../_components/LinkBack";
import TaskTitle from "../_components/TaskTitle";
import WrapperWithLabel from "../_components/WrapperWithLabel";

export default function DistributeServerWorkload() {
  const [nodesNumber, setNodesNumber] = useState<number>(1);
  const [workloadsNumber, setWorkloadsNumber] = useState<number>(1);

  function distribute(nodes: number, workload: number) {
    return Array.from({ length: nodes }, (_, i) =>
      Array.from(
        {
          length: Math.floor(workload / nodes) + (i < workload % nodes ? 1 : 0),
        },
        (_, j) =>
          j + i * Math.floor(workload / nodes) + Math.min(i, workload % nodes)
      )
    );
  }

  return (
    <>
      <LinkBack />
      <TaskTitle title="Distribute server workload" />
      <div>
        Bob has a server farm crunching numbers. He has nodes servers in his
        farm. His company has a lot of work to do.
        <br /> The work comes as a number workload which indicates how many jobs
        there are. Bob wants his servers to get an equal number of jobs each. If
        that is impossible, he wants the first servers to receive more jobs. He
        also wants the jobs sorted, so that the first server receives the first
        jobs.
        <br /> The way this works, Bob wants an array indicating which jobs are
        going to which servers.
      </div>
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
        <>
          {!nodesNumber || !workloadsNumber
            ? "Invalid input"
            : distribute(nodesNumber, workloadsNumber).map(
                (outerArrayItem) =>
                  "[" +
                  outerArrayItem.map((innerArrayItem, index) =>
                    index === 0 ? innerArrayItem : ` ${innerArrayItem}`
                  ) +
                  "] "
              )}
        </>
      </WrapperWithLabel>
    </>
  );
}
