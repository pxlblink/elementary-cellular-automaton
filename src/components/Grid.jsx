import Row from "./Row";
import computeNextRow from "../utils/computeNextRow.js";
import { motion } from "motion/react";

export default function Grid({ ruleNo, columnSize }) {
  let rowData = [];
  for (let i = 0; i < columnSize; i++) {
    if (i == Math.floor(columnSize / 2)) {
      rowData.push(1);
    } else {
      rowData.push(0);
    }
  }

  let rows = [];
  for (let i = 0; i < 24; i++) {
    rows.push(<Row key={i} rowData={rowData} />);
    rowData = computeNextRow(rowData, ruleNo);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="mx-auto max-w-full w-fit"
    >
      <div>{rows}</div>
      <p>Rule {ruleNo}</p>
    </motion.div>
  );
}
