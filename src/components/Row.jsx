import Cell from "./Cell";

export default function Row({ rowData }) {
  return (
    <div className="flex">
      {rowData.map((cellValue, index) => (
        <Cell key={index} alive={cellValue} />
      ))}
    </div>
  );
}
