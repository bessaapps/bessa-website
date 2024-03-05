import { Flex, Link } from "@chakra-ui/react";

export default function AdminTop() {
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
    <Flex gap={4}>
      {links?.map((link) => (
        <Link key={link.href} href={`/admin/${link.href}`} color={"white"}>
          {link.anchor}
        </Link>
      ))}
    </Flex>
  );
}
