export default function Input({
  inputNo,
  setInputNo,
  setRuleNo,
  setGenerated,
}) {
  return (
    <div>
      <form action="" className="flex flex-wrap gap-2 justify-center my-4">
        <input
          className="py-1 px-2 rounded-sm border"
          type="number"
          placeholder="Enter rule number"
          onChange={(event) => setInputNo(event.target.value)}
        />
        <input
          type="submit"
          className="py-1 px-2 text-lg text-white bg-gray-900 rounded-sm w-fit"
          value="Generate"
          onClick={(event) => {
            event.preventDefault();
            setRuleNo(inputNo);
            setGenerated(true);
          }}
        />
      </form>
    </div>
  );
}
