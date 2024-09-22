"use client";
import { useRouter } from 'next/navigation'


export function Account() {
  const router = useRouter()
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => router.push("/login")}>
        Sign Up
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => router.push("/login")}>
        Log In
      </button>
    </>
  );
}
