function computeNextCell(left, current, right, rule) {
  let segment = `${left}${current}${right}`;
  let segmentToNum = parseInt(segment, 2);
  let newCell = (1 << segmentToNum) & rule ? 1 : 0;
  // let newCell = (rule >> segmentToNum) & 1;
  return newCell;
}

export default function calculateNextRow(rowData, ruleNo) {
  let result = [];
  let rowLen = rowData.length;
  for (let i = 0; i < rowLen; i++) {
    let leftCell = rowData[mod(i - 1, rowLen)];
    let currentCell = rowData[i];
    let rightCell = rowData[mod(i + 1, rowLen)];
    let newCell = computeNextCell(leftCell, currentCell, rightCell, ruleNo);
    result.push(newCell);
  }
  return result;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
