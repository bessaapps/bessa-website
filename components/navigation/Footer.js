import { Flex, Link, Text, Show } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  const links = [
    { href: "terms", anchor: "Terms & Conditions" },
    { href: "privacy", anchor: "Privacy Policy" },
    { href: "eula", anchor: "End-User License Agreement" },
    { href: "cookies", anchor: "Cookie Policy" },
  ];

  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Flex w={"100%"} justify={"space-between"}>
          <Show above={"md"}>
            <Flex>
              {links?.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  title={`${link.anchor} | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community`}
                  color={"white"}
                  mr={4}
                >
                  {link.anchor}
                </Link>
              ))}
            </Flex>
          </Show>
          <Text color={"white"}>
            &copy; Copyright{" "}
            <Link
              as={NextLink}
              href={"/"}
              title={
                "Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
              }
            >
              Bessa LGBTQIA+ Community App
            </Link>{" "}
            2024
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
