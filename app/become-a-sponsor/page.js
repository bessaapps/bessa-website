import {
  Container,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  AspectRatio,
  Link,
  Button,
  Tag,
  SimpleGrid,
  GridItem,
  Box
} from "@chakra-ui/react";
import DonorCTA from "@/components/DonorCTA";
import Image from "next/image";
import Hero from "@/images/ai/firefly-1.jpg";
import { url, title } from "@/utils/constants";

const description =
  "Support Bessa, the LGBTQ social app creating safe, inclusive spaces for queer people to connect, share, and find community.";

export const metadata = {
  title: `Become a Sponsor | ${title}`,
  description,
  languages: {
    "en-US": "/en-US"
  },
  openGraph: {
    title: `Become a Sponsor | ${title}`,
    description,
    url,
    siteName: `Become a Sponsor | ${title}`,
    images: [
      {
        url: `${url}/images/become-a-sponsor.png`,
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Become a Sponsor | ${title}`,
    description,
    creator: "@getbessa",
    images: {
      url: `${url}/images/become-a-sponsor.png`,
      alt: `Become a Sponsor | ${title}`
    }
  }
};

export default function BecomeASponsor() {
  return (
    <>
      <Container maxW={"container.xl"} my={16}>
        <AspectRatio ratio={16 / 9}>
          <Image src={Hero} alt={"Bessa Guidelines"} />
        </AspectRatio>
      </Container>
      <Container maxW={"container.lg"} py={[8, 32]}>
        <Heading as={"h3"} textAlign={"center"} mb={4}>
          Bessa is an LGBTQ social networking app created for real community and
          you&apos;re invited to be a part of it. Whether you&apos;re LGBTQ, an
          ally, a parent, a creator, or an advocate, your support can keep Bessa
          alive. Sponsor or donate today and help us keep the space we&apos;ve
          all been waiting for.
        </Heading>
      </Container>
      <Container maxW={"container.xl"} my={16}>
        <SimpleGrid columns={[1, 2]} gap={4} mb={4}>
          <GridItem>
            <Box w={["100%", "75%"]}>
              <Tag mb={2}>Become a Sponsor</Tag>
              <Heading mb={4}>Partner with Purpose</Heading>
              <Text mb={4}>
                Bessa is a new kind of social platform&mdash;one built with
                LGBTQ people in mind from the start. It&apos;s a place for
                connection, creativity, celebration, and community. It&apos;s
                designed to reflect the full spectrum of queer experience,
                shaped by the voices and values of those who live it every day.
                Sponsoring Bessa means supporting a platform that centers LGBTQ
                people.
              </Text>
              <Text mb={4}>
                Whether you&apos;re LGBTQ yourself, an ally, a parent, a friend,
                or a creator who uplifts community, by sponsoring, you&apos;re
                partnering with purpose. You’re not just helping fund an app;
                you&apos;re keeping a space that brings people together, shares
                real stories, and grows with the people who use it alive. Join
                something meaningful and be part of what comes next.
              </Text>
              <Link
                href={
                  "https://www.indiegogo.com/projects/the-social-app-that-puts-queer-community-first"
                }
                target={"_blank"}
              >
                <Button colorScheme={"primary"} size={"lg"} my={8}>
                  Join as a Sponsor Now!
                </Button>
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Box w={["100%", "75%"]}>
              <Tag mb={2}>Make a Donation</Tag>
              <Heading mb={4}>Help Fund Community</Heading>
              <Text mb={4}>
                Bessa is intended to bring LGBTQ people together, share,
                connect, and celebrate who we are. It&apos;s not just another
                social app; it&apos;s a platform shaped by the community, for
                the community. It&apos;s a space that reflects the richness of
                queer life, and we need your help to keep it that way. Every
                donation, no matter the size, helps us grow something that truly
                belongs to all of us.
              </Text>
              <Text mb={4}>
                If you&apos;re LGBTQ, if you love someone who is, or if you
                believe in the power of community-driven change, this is your
                chance to make a real impact. Your support helps bring this
                project to life and shows that platforms centered around care,
                creativity, and authenticity are worth keeping. Donate today,
                and be part of something bigger.
              </Text>
              <Link
                href={
                  "https://www.indiegogo.com/projects/the-social-app-that-puts-queer-community-first"
                }
                target={"_blank"}
              >
                <Button colorScheme={"primary"} size={"lg"} my={8}>
                  Make a One-Time Donation
                </Button>
              </Link>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Container py={[8, 32]}>
        <Tag mb={2}>The Problem</Tag>
        <Heading mb={4}>The Issues LGBTQ People Face on Social</Heading>
        <Text mb={4}>
          Mainstream social media platforms are&apos;t built with LGBTQ people
          in mind and the cracks show. From the start, these spaces have
          prioritized scale, ad revenue, and mass appeal over meaningful
          inclusion. For queer users, that often means navigating environments
          where harassment is common, content moderation is inconsistent, and
          community guidelines seem to shift without warning. Even
          well-intentioned platforms frequently miss the mark, failing to
          understand the specific needs and voices within LGBTQ communities. As
          a result, many queer users find themselves tiptoeing around language,
          reporting abuse that goes unanswered, or even watching their content
          disappear through shadowbanning and censorship.
        </Text>
        <Text mb={4}>
          These issues go deeper than just bugs or bad policy; they reflect a
          lack of representation and investment at every level. Queer creators
          struggle to gain traction in algorithms that suppress
          &quot;non-mainstream&quot; content, while LGBTQ stories are too often
          filtered, flagged, or hidden under vague standards. Platforms profit
          from Pride campaigns one month, then go silent the next. For LGBTQ
          people and the people who love and support them, this creates a
          dissonant, exhausting digital experience&mdash;one that feels more
          disapproving than protective and more interested in monetizing
          identity than honoring it.
        </Text>
        <UnorderedList mb={4}>
          <ListItem>
            Censorship of LGBTQ content, especially around identity, sex
            education, and advocacy
          </ListItem>
          <ListItem>
            Inconsistent or inadequate moderation that fails to address
            harassment, hate speech, and targeted attacks
          </ListItem>
          <ListItem>
            Lack of meaningful representation in platform design, policies, and
            leadership
          </ListItem>
          <ListItem>
            Algorithmic bias that deprioritizes queer content in favor of
            &quot;brand-safe&quot; material
          </ListItem>
          <ListItem>
            Exploitation of identity for profit, without real reinvestment in
            LGBTQ communities
          </ListItem>
        </UnorderedList>
      </Container>
      <Container py={[8, 32]}>
        <Tag mb={2}>The Solution</Tag>
        <Heading mb={4}>Bessa Stands Apart</Heading>
        <Text mb={4}>
          Bessa is a space designed from the ground up to reflect queer lives
          and their communities. Built by LGBTQ people, Bessa prioritizes
          authenticity and connection. Here, queer content isn&apos;t hidden or
          deprioritized. It&apos;s celebrated. Whether you&apos;re sharing your
          story or finding others who understand you, Bessa is built to honor
          who you are.
        </Text>
        <Text mb={4}>
          Supporting Bessa means supporting visibility without compromise,
          creativity without censorship, and community without a corporate
          filter. It&apos;s a place where LGBTQ people can connect meaningfully
          and contribute to something that uplifts, reflects, and grows with us.
        </Text>
        <Text>🎤 Queer-led and community-driven</Text>
        <Text>📣 No shadowbanning or suppression</Text>
        <Text>🌈 Representation of LGBTQ voices</Text>
        <Text>🔍 Transparent moderation policies</Text>
        <Text>🌍 Real connections online and offline</Text>
        <Text>💬 Creative and social freedom</Text>
      </Container>
      <Container py={[8, 32]}>
        <Tag mb={2}>The People</Tag>
        <Heading mb={4}>Who Bessa Serves</Heading>
        <Text mb={4}>
          Bessa is built for LGBTQ people who are searching for more — more
          connection, more visibility, and more community, both online and off.
          Whether you&apos;re looking for friends, support, or a sense of
          belonging, Bessa offers a space where queer identity is the
          foundation, not a side note. From discovering local LGBTQ-friendly
          places and events to joining conversations that reflect real lived
          experience, Bessa helps users build meaningful relationships in ways
          that mainstream platforms often overlook.
        </Text>
        <Text mb={4}>
          But Bessa isn&apos;t just for individuals — it&apos;s for creators
          too. It serves queer content creators who want to share without being
          censored or buried by censorship. Bessa is a platform for anyone who
          believes LGBTQ lives deserve to be celebrated, not just tolerated.
          Whether you&apos;re here to find community or uplift others, Bessa is
          for you.
        </Text>
        <Text>🏳️‍🌈 LGBTQ people</Text>
        <Text>📍 People looking for LGBTQ-friendly places</Text>
        <Text>🎉 Those wanting to discover LGBTQ events</Text>
        <Text>🎥 Queer content creators</Text>
        <Text>✨ Anyone tired of mainstream platforms</Text>
      </Container>
      <Container py={[8, 32]}>
        <Tag mb={2}>The Story</Tag>
        <Heading mb={4}>Why I&apos;m Building This</Heading>
        <Text mb={4}>
          I&apos;m Topher — a queer bisexual man, software engineer, and the
          creator of Bessa. I built Bessa myself: every line of code, every
          design decision, every intention behind it reflects my hope to help
          LGBTQ people connect, grow, and thrive. The idea started years ago
          while living in Oakland, CA, where I experienced many kinds of
          communities&mdash;some wide open, some closely guarded. I became
          fascinated by the balance between the two, and how the best spaces
          create room for people to show up fully as themselves. Bessa is my
          attempt to bring that idea online to create a vibrant and inclusive
          LGBTQ community that respects culture, values connection, and welcomes
          a broad spectrum of people.
        </Text>
        <Text mb={4}>
          Bessa isn&apos;t backed by a big company or investor. It&apos;s a
          personal project, maintained outside my full-time work as a software
          engineer, and sustained by those who believe in it. If you&apos;re
          LGBTQ, or someone who loves and supports us, I invite you to donate or
          become a sponsor. You&apos;ll be helping keep a living, growing
          platform alive&mdash;one that celebrates diverse genders, ethnicities,
          ages, abilities, and bodies without compromising what makes LGBTQ
          community so powerful. Together, we can build something that truly
          reflects us.
        </Text>
        <Text>🌈 Built by LGBTQ, for LGBTQ</Text>
        <Text>🔌 Connect with real LGBTQ people</Text>
        <Text>📍 Share LGBTQ places and events</Text>
        <Text>🫶 An experiment in radical inclusivity</Text>
        <Text>🔧 Thoughtful, accessible design</Text>
        <Text>💬 Guided by community engagement</Text>
      </Container>
      <Container maxW={"container.xl"} my={16}>
        <SimpleGrid columns={[1, 2]} gap={4} mb={4}>
          <GridItem>
            <Box w={["100%", "75%"]}>
              <Tag mb={2}>The Numbers</Tag>
              <Heading mb={4}>What your Donation Helps to Fund</Heading>
              <UnorderedList mb={4}>
                <ListItem>Software and subscriptions ($1,600/yr.)</ListItem>
                <ListItem>Advertising and Marketing ($520/yr.)</ListItem>
                <ListItem>Business licenses and permits ($160/yr.)</ListItem>
              </UnorderedList>
            </Box>
          </GridItem>
          <GridItem>
            <Box w={["100%", "75%"]}>
              <Tag mb={2}>The Benefits</Tag>
              <Heading mb={4}>Sponsorship Packages</Heading>
              <UnorderedList>
                <ListItem>Monthly recognition and link on website</ListItem>
                <ListItem>Monthly recognition on app store listings</ListItem>
                <ListItem>
                  Monthly recognition in the members newsletter
                </ListItem>
                <ListItem>Personalized thank-you video</ListItem>
                <ListItem>Personalized donor badge</ListItem>
              </UnorderedList>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
      <DonorCTA />
    </>
  );
}
