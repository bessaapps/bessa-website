"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BecomeASponsor() {
  const router = useRouter();

  useEffect(() => {
    router.push("/donate");
  }, []);

  return null;
}
