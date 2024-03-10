"use client";

import { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const { setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (
        firebaseUser?.email === "topher@bessssssa.com" ||
        firebaseUser?.email === "apps@bessssssa.com" ||
        firebaseUser?.email === "topherjamesknoll@gmail.com"
      ) {
        setUser(firebaseUser);
      } else {
        await auth.signOut();
        setUser({});
        router.push("/");
      }
    });
  }, []);

  return null;
}
