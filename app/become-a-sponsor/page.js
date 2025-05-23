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
  GridItem
} from "@chakra-ui/react";
import DonorCTA from "@/components/DonorCTA";
import Image from "next/image";
import Hero from "@/images/ai/firefly-1.jpg";
import { url } from "@/utils/constants";

const title = "Become a Sponsor | Bessa | LGBTQ Social Networking App";
const description =
  "Support Bessa, the LGBTQ social app creating safe, inclusive spaces for queer people to connect, share, and find community.";

export const metadata = {
  title,
  description,
  languages: {
    "en-US": "/en-US"
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
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
    title,
    description,
    creator: "@getbessa",
    images: {
      url: `${url}/images/become-a-sponsor.png`,
      alt: title
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
            <Tag mb={2}>Become a Sponsor</Tag>
            <Heading mb={4}>Partner with Purpose</Heading>
            <Text mb={4}>
              Bessa is a new kind of social platform&mdash;one built with LGBTQ
              people in mind from the start. It&apos;s a place for connection,
              creativity, celebration, and community. It&apos;s designed to
              reflect the full spectrum of queer experience, shaped by the
              voices and values of those who live it every day. Sponsoring Bessa
              means supporting a platform that centers LGBTQ people.
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
          </GridItem>
          <GridItem>
            <Tag mb={2}>Make a Donation</Tag>
            <Heading mb={4}>Help Fund Community</Heading>
            <Text mb={4}>
              Bessa is intended to bring LGBTQ people together, share, connect,
              and celebrate who we are. It&apos;s not just another social app;
              it&apos;s a platform shaped by the community, for the community.
              It&apos;s a space that reflects the richness of queer life, and we
              need your help to keep it that way. Every donation, no matter the
              size, helps us grow something that truly belongs to all of us.
            </Text>
            <Text mb={4}>
              If you&apos;re LGBTQ, if you love someone who is, or if you
              believe in the power of community-driven change, this is your
              chance to make a real impact. Your support helps bring this
              project to life and shows that platforms centered around care,
              creativity, and authenticity are worth keeping. Donate today, and
              be part of something bigger.
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
          </GridItem>
        </SimpleGrid>
        <Heading mb={2}>The Problem</Heading>
        <Text mb={4}>
          Mainstream social apps often lack the safety and inclusivity that
          LGBTQ people need. As a result, many queer individuals feel isolated
          and disconnected, especially online. Finding LGBTQ-friendly places and
          events remains a challenge without dedicated, affirming platforms.
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Mainstream social apps aren’t inclusive or safe.</ListItem>
          <ListItem>Queer people feel isolated.</ListItem>
          <ListItem>
            Too many LGBTQ people lack access to safe and inclusive spaces
            online.
          </ListItem>
          <ListItem>
            It&apos;s difficult to find LGBTQ-friendly places and LGBTQ-related
            events.
          </ListItem>
        </UnorderedList>
        <Heading mb={2}>The Solution</Heading>
        <Text mb={4}>
          Bessa is a social media app created specifically for the LGBTQ
          community to foster both online and real-world connections. It
          empowers users to express pride in their identity while sharing posts,
          building profiles, and connecting with others. Bessa also features
          user-vetted, queer-friendly places and local LGBTQ events to help
          users find safe, inclusive spaces.
        </Text>
        <UnorderedList mb={4}>
          <ListItem>
            Bessa is a social media app built specifically for the LGBTQ
            community.
          </ListItem>
          <ListItem>
            Bessa is designed to encourage both online and real-world
            connections.
          </ListItem>
          <ListItem>
            Bessa enables people to be proud of their identity.
          </ListItem>
          <ListItem>
            Users can complete a profile, make posts, and connect with other
            users.
          </ListItem>
          <ListItem>
            Bessa is a list of local, user-vetted, queer-friendly places.
          </ListItem>
          <ListItem>Bessa is a list of local LGBTQ events.</ListItem>
        </UnorderedList>
        <Heading mb={2}>Who Bessa Serves</Heading>
        <UnorderedList mb={4}>
          <ListItem>Queer people needing affirming online space</ListItem>
          <ListItem>LGBTQ folks in rural or underrepresented regions</ListItem>
          <ListItem>Travelers seeking inclusive locations</ListItem>
          <ListItem>Anyone craving meaningful queer connection</ListItem>
        </UnorderedList>
        <Heading mb={2}>Why I&apos;m Building This</Heading>
        <UnorderedList mb={4}>
          <ListItem>
            I want to build an inclusive LGBTQ community without sacrificing its
            safety or culture.
          </ListItem>
          <ListItem>
            As a queer bisexual man, I want Bessa to be open to a variety of
            sexual orientations, genders, ethnicities, body types, ages,
            abilities, and more.
          </ListItem>
        </UnorderedList>
        <Heading mb={2}>What $200/mo. will Fund</Heading>
        <UnorderedList mb={4}>
          <ListItem>Software and subscriptions ($1,600/yr.)</ListItem>
          <ListItem>Advertising and Marketing ($520/yr.)</ListItem>
          <ListItem>Business licenses and permits ($160/yr.)</ListItem>
        </UnorderedList>
        <Heading mb={2}>Donor Appreciation</Heading>
        <UnorderedList>
          <ListItem>Monthly recognition and link on website</ListItem>
          <ListItem>Monthly recognition on app store listings</ListItem>
          <ListItem>Monthly recognition in the members newsletter</ListItem>
          <ListItem>Personalized thank-you video</ListItem>
          <ListItem>Personalized donor badge</ListItem>
        </UnorderedList>
      </Container>
      <DonorCTA />
    </>
  );
}
