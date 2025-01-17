interface InputNaturalNumberProps {
  string: string;
  setString: (string: string) => void;
}

export default function InputNaturalString({
  string,
  setString,
}: InputNaturalNumberProps) {
  return (
    <input
      type="string"
      value={string}
      className="w-1/2 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={(e) => setString(e.target.value)}
    />
  );
}
