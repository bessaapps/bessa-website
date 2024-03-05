"use client";

import { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const { setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser?.email === "topher@bessssssa.com") {
        setUser(firebaseUser);
      } else {
        setUser({});
        router.push("/");
      }
    });
  }, []);

  return null;
}
