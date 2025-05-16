import {
  Container,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  AspectRatio,
  Link,
  Button,
  Flex,
  Box,
  Show
} from "@chakra-ui/react";
import DonorCTA from "@/components/DonorCTA";
import Image from "next/image";
import Hero from "@/images/ai/Firefly_two people shaking hands, one is black and the other one is caucasian. the black one  585686.jpg";
import Script from "next/script";

export const metadata = {
  title: "Story | Bessa | An LGBTQ Social Media App"
};

export default function BecomeASponsor() {
  return (
    <>
      <Container maxW={"container.xl"} my={16}>
        <AspectRatio ratio={16 / 9}>
          <Image src={Hero} alt={"Bessa Guidelines"} />
        </AspectRatio>
      </Container>
      <Container maxW={"container.xl"} my={16}>
        <Flex gap={8}>
          <Box>
            <Heading as={"h1"} mb={4}>
              Become a Sponsor
            </Heading>
            <Text mb={4}>
              Too often, LGBTQ people are forced to navigate digital spaces that
              weren&apos;t made with them in mind. Mainstream social platforms
              lack the safety, inclusivity, and cultural understanding that the
              LGBTQ community deserves. This leads to isolation, especially for
              those in rural or underrepresented areas, and makes it difficult
              to find meaningful connections. Bessa is the solution&mdash;a
              social media app built <i>by and for</i> LGBTQ people that offers
              a safe, affirming space to connect, share, and discover
              queer-friendly events and places.
            </Text>
            <Text mb={4}>
              By becoming a monthly donor, you&apos;re helping build more than
              just an app&mdash;you’re helping build a sanctuary. With just $190
              a month, Bessa can cover essential tech costs, promote the app to
              those who need it most, and stay up and running. In return,
              you&apos;ll be recognized monthly on our site, app store listings,
              and newsletters as well as receive a personalized thank-you video
              and donor badge as a sign of appreciation. Your support helps
              create a space where queer people can be seen, celebrated, and
              truly belong.
            </Text>
            <Link href={"https://givebutter.com/getbessa"} target={"_blank"}>
              <Button colorScheme={"primary"} size={"lg"} mb={12}>
                Donate Now
              </Button>
            </Link>
            <Heading mb={2}>The Problem</Heading>
            <Text mb={4}>
              Mainstream social apps often lack the safety and inclusivity that
              LGBTQ people need. As a result, many queer individuals feel
              isolated and disconnected, especially online. Finding
              LGBTQ-friendly places and events remains a challenge without
              dedicated, affirming platforms.
            </Text>
            <UnorderedList mb={4}>
              <ListItem>
                Mainstream social apps aren’t inclusive or safe.
              </ListItem>
              <ListItem>Queer people feel isolated.</ListItem>
              <ListItem>
                Too many LGBTQ people lack access to safe and inclusive spaces
                online.
              </ListItem>
              <ListItem>
                It&apos;s difficult to find LGBTQ-friendly places and
                LGBTQ-related events.
              </ListItem>
            </UnorderedList>
            <Heading mb={2}>The Solution</Heading>
            <Text mb={4}>
              Bessa is a social media app created specifically for the LGBTQ
              community to foster both online and real-world connections. It
              empowers users to express pride in their identity while sharing
              posts, building profiles, and connecting with others. Bessa also
              features user-vetted, queer-friendly places and local LGBTQ events
              to help users find safe, inclusive spaces.
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
              <ListItem>
                LGBTQ folks in rural or underrepresented regions
              </ListItem>
              <ListItem>Travelers seeking inclusive locations</ListItem>
              <ListItem>Anyone craving meaningful queer connection</ListItem>
            </UnorderedList>
            <Heading mb={2}>Why I&apos;m Building This</Heading>
            <UnorderedList mb={4}>
              <ListItem>
                I want to build an inclusive LGBTQ community without sacrificing
                its safety or culture.
              </ListItem>
              <ListItem>
                As a queer bisexual man, I want Bessa to be open to a variety of
                sexual orientations, genders, ethnicities, body types, ages,
                abilities, and more.
              </ListItem>
            </UnorderedList>
            <Heading mb={2}>What $190/mo. will Fund</Heading>
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
          </Box>
          <Show above={"sm"}>
            <Box minW={440} height={1} position={"sticky"} top={144}>
              <givebutter-widget id={"gR3GPp"} />
              <Script
                async
                src={
                  "https://widgets.givebutter.com/latest.umd.cjs?acct=ZJq60I1yWwOJ4SCb&p=other"
                }
              />
            </Box>
          </Show>
        </Flex>
      </Container>
      <DonorCTA />
    </>
  );
}
