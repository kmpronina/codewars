import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-20 gap-8 row-start-2 items-center text-gray-900">
      <Link href="/alphabet_symmetry">Alphabet symmetry</Link>{" "}
      <Link href="/alphabetized">Alphabetized</Link>
      <Link href="/distribute_server_workload">Distribute server workload</Link>
      <Link href="/ideal_electron_distribution">
        Ideal electron distribution
      </Link>
      <Link href="/is_it_a_triangle">Is it a triangle?</Link>
      <Link href="/triangle_number_check">Triangle number check</Link>
    </main>
  );
}
