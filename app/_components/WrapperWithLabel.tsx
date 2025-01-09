interface WrapperWithLabelProps {
  label: string;
  children: React.ReactNode;
}
export default function WrapperWithLabel({
  label,
  children,
}: WrapperWithLabelProps) {
  return (
    <div className="flex-col gap-5 items-start">
      <p className="text-gray-900">{label + ":"}</p>
      {children}
    </div>
  );
}
