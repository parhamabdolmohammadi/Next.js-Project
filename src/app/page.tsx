import Image from "next/image";
import coffee from "@/public/images/coffee.png";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { Roboto } from "next/font/google";
import { getServerSession } from "next-auth"; // ✅ Correct for v4
import { authOptions } from "@/auth";
import type { Session } from "next-auth"; // optional, for TS

export default async function Home() {
  const session = (await getServerSession(authOptions)) as Session | null;

  return (
    <>
      <main>
        <h1>
          Hello {session?.user?.name ? <span>{session.user.name}</span> : null}
        </h1>
        <Link href="/users"> Users </Link>
        <ProductCard />
      </main>
      <Image
        src={"https://bit.ly/react-cover"}
        alt="coffee"
        width={300}
        height={170}
      />
    </>
  );
}

// <main>
//   <h1>
//     Hello {session?.user?.name ? <span>{session.user.name}</span> : null}
//   </h1>
//   <Link href="/users"> Users </Link>
//   <ProductCard />
// </main>
