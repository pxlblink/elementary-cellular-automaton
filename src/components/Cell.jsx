export default function Cell({ alive }) {
  return (
    <div
      className={`w-4 aspect-square border border-gray-900 transition-colors ease-in-out duration-100 ${alive ? "bg-gray-900" : "bg-white"}`}
    ></div>
  );
}
