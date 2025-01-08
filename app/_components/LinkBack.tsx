import Link from "next/link";

export default function LinkBack() {
  return (
    <Link href="/" scroll={false} className="text-gray-900">
      Back
    </Link>
  );
}
