interface InputNaturalNumberProps {
  number: number;
  setNumber: (number: number) => void;
}

export default function InputNaturalNumber({
  number,
  setNumber,
}: InputNaturalNumberProps) {
  return (
    <input
      type="number"
      value={number}
      className="w-1/4 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={(e) => setNumber(Number(e.target.value))}
    />
  );
}
