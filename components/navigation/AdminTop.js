"use client";

import { Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";

export default function AdminTop() {
  const router = useRouter();
  const links = [
    {
      href: "users",
      anchor: "Users"
    },
    {
      href: "posts",
      anchor: "Posts"
    },
    {
      href: "messages",
      anchor: "Messages"
    },
    {
      href: "Email",
      anchor: "email"
    }
  ];

  return (
    <Flex justify={"space-between"}>
      <Flex gap={4}>
        {links?.map((link) => (
          <Link key={link.href} href={`/admin/${link.href}`} color={"white"}>
            {link.anchor}
          </Link>
        ))}
      </Flex>
      <Link
        color={"white"}
        onClick={() => {
          auth.signOut().then(() => router.push("/"));
        }}
      >
        Logout
      </Link>
    </Flex>
  );
}
