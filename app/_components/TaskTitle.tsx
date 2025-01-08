interface TaskTitleProps {
  title: string;
}

export default function TaskTitle({ title }: TaskTitleProps) {
  return <h2 className="text-2xl/7 font-bold text-gray-900">{title}</h2>;
}
