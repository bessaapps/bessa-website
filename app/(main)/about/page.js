import {
  Container,
  Heading,
  Text,
  Tag,
  Link,
  Button,
  Flex
} from "@chakra-ui/react";
import { title, url } from "@/utils/constants";

export const metadata = {
  title: `About ${title}`,
  description:
    "Learn about Bessa, the LGBTQ Social Networking App built for queer connection. A community-first platform for gay, lesbian, trans, and nonbinary people to share and thrive.",
  openGraph: {
    title: `About ${title}`,
    description:
      "Learn about Bessa, the LGBTQ Social Networking App built for queer connection. A community-first platform for gay, lesbian, trans, and nonbinary people to share and thrive.",
    url: `${url}/about`
  },
  twitter: {
    title: `About ${title}`,
    description:
      "Learn about Bessa, the LGBTQ Social Networking App built for queer connection. A community-first platform for gay, lesbian, trans, and nonbinary people to share and thrive."
  }
};

export default function About() {
  return (
    <Container maxW={"container.xl"} my={16}>
      <Heading as={"h1"} mb={4}>
        Our Story
      </Heading>
      <Tag colorScheme={"blackAlpha"} mb={4}>
        January 19th, 2025
      </Tag>
      <Text mb={4}>
        Hello, I&apos;m Topher. Bessa is owned, designed, and developed by me, a
        queer man doing his best to build strong LGBTQ communities open to all
        genders, ethnicities, ages, and abilities. I&apos;m a full-time software
        engineer in Las Vegas, NV. I studied application development at Colorado
        State University. I create user-centric products using sound
        programming, strong design principles, and accessibility guidelines.
      </Text>
      <Text mb={4}>
        <Text as={"b"}>Bessa</Text> connects you with new and existing people in
        LGBTQ communities. Everything is designed to encourage discovering and
        interacting with members. You can post updates, comments, reactions, and
        message members directly. You can also share LGBTQ-friendly events and
        places with others. Guidelines and rules help to create a safer space
        for Bessa members.
      </Text>
      <Heading mb={2}>Inclusivity</Heading>
      <Text mb={4}>
        What is inclusivity and just how inclusive should our communities be?
        Bessa is an experiment to see how inclusive a community can be without
        sacrificing the safety and culture of the group.
      </Text>
      <Text mb={4}>
        I became infatuated with the idea of communities while living in
        Oakland, CA where I was witness to a wide range of communities. Each of
        them created a safe space for its members to grow, be themselves, and
        embrace their culture. I realized that some were very accepting to
        newcomers and some were more restricted. Toying with the pros and cons
        of both, I began to think about which style of community is better: a
        tight-knit community, completely inclusive, or somewhere in between.
      </Text>
      <Text mb={4}>
        As a queer bisexual man, I decided to start with the LGBTQ community. I
        created Bessa to see how inclusive to a variety of genders, ethnicities,
        body types, ages, and more it could be. While its members remain safe, I
        hope that Bessa will grow into the most inclusive online LGBTQ community
        and reach people all across the globe.
      </Text>
      <Flex w={"100%"} gap={2} flexWrap={"wrap"} my={12}>
        <Link href={"/"} title={"Bessa LGBTQ Social Networking App"}>
          <Button colorScheme={"primary"} size={"lg"}>
            Learn More
          </Button>
        </Link>
        <Link
          href={"/become-a-sponsor"}
          title={"Become a Sponsor | Bessa | LGBTQ Social Networking App"}
        >
          <Button colorScheme={"primary"} size={"lg"}>
            Sponsor & Donate
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}
