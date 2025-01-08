interface SelectNumberProps {
  selectedNumber: number;
  setSelectedNumber: (value: number) => void;
}
export default function SelectNumber({
  selectedNumber,
  setSelectedNumber,
}: SelectNumberProps) {
  const numberArr = Array.from({ length: 21 }, (_, i) => i - 10);
  return (
    <select
      value={selectedNumber}
      onChange={(e) => setSelectedNumber(Number(e.target.value))}
      className="bg-white border border-gray-400 hover:border-gray-500 p-2 rounded shadow leading-tight focus:outline-none text-gray-800"
    >
      {numberArr.map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
  );
}
