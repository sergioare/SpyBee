"use client";
import Spinner from "@/components/molecules/Spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Spinner />;
}
