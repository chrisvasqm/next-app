import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href={'/users'} className="text-blue-500">Users</Link>
    </main>
  )
}
