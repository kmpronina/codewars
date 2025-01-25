import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-20 gap-8 row-start-2 items-center text-gray-900">
      <Link href="/pages/alphabet_symmetry">Alphabet symmetry</Link>
      <Link href="/pages/alphabetized">Alphabetized</Link>
      <Link href="/pages/distribute_server_workload">
        Distribute server workload
      </Link>
      <Link href="/pages/ideal_electron_distribution">
        Ideal electron distribution
      </Link>
      <Link href="/pages/is_it_a_triangle">Is it a triangle?</Link>
      <Link href="/pages/password_generator">Password generator</Link>
      <Link href="/pages/repeated_substring">Repeated Substring</Link>
      <Link href="/pages/simple_fun_116:_prime_string">
        Simple Fun #116: Prime String
      </Link>
      <Link href="/pages/strong_number">Strong Number</Link>
      <Link href="/pages/triangle_number_check">Triangle number check</Link>
      <Link href="/pages/valid_phone_number">Valid Phone Number</Link>
    </main>
  );
}
