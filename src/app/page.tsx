import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth"; // ✅ Correct for v4
import { authOptions } from "@/auth";
import type { Session } from "next-auth"; // optional, for TS

export default async function Home() {
  const session = (await getServerSession(authOptions)) as Session | null;

  return (
    <main>
      <h1>
        Hello {session?.user?.name ? <span>{session.user.name}</span> : null}
      </h1>
      <Link href="/users"> Users </Link>
      <ProductCard />
    </main>
  );
}
