"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const NewUserPage = () => {
  const router = useRouter();

  return (
    <main>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
      <p>Hello1</p>
      <Link href="/users"> Users </Link>
    </main>
  );
};

export default NewUserPage;
