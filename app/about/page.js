import { Container, Heading, Text, Tag } from "@chakra-ui/react";

export const metadata = {
  title: "Story | Bessa | An LGBTQ Social Media App"
};

export default function Story() {
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
    </Container>
  );
}
