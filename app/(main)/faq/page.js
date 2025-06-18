import { Heading, Text, Link, Button, Flex } from "@chakra-ui/react";
import { customMetadata, title, titles } from "@/utils/constants";
import Hero from "@/components/Hero";
import MediaRight from "@/components/MediaRight";
import Section from "@/components/Section";

export const metadata = customMetadata({
  metadataTitle: titles.faq,
  metadataDescription:
    "Find answers to your questions about Bessa, the gay social media app and LGBTQ social networking app built for real connection, queer community, and content sharing.",
  path: "/faq",
  imagePath: "/images/stock/gay-community.jpg"
});

export default function FAQ() {
  return (
    <>
      <Hero
        heading={titles.faq}
        lead={"FAQ"}
        bgImage={"/images/stock/pride-flag.jpg"}
      />
      <MediaRight
        lead={
          "Bessa is a gay social media app and LGBTQ social networking app designed to bring queer people together through real connection, shared experiences, and community."
        }
        bottomContent={
          <Flex w={"100%"} gap={2} flexWrap={"wrap"}>
            <Link href={"/"} title={title}>
              <Button colorScheme={"primary"} size={"lg"}>
                Learn More
              </Button>
            </Link>
            <Link
              href={"/donate"}
              title={"Fuel the Next Generation of Gay Social Media"}
            >
              <Button colorScheme={"primary"} size={"lg"}>
                Donate
              </Button>
            </Link>
          </Flex>
        }
        bgImage={"/images/stock/main.jpg"}
      >
        <Text>
          Bessa is a gay social media app and LGBTQ social networking app built
          to bring queer people together in meaningful, authentic ways. As a
          queer-friendly social app, Bessa provides a vibrant space to post and
          share LGBTQ content, connect with local LGBTQ+ individuals, and
          discover community events and LGBTQ-vetted hangouts. It&apos;s not
          just another app; it&apos;s an inclusive social platform where you can
          find LGBTQ friends online, message your chosen fam, and build lasting
          connections beyond dating or hookup culture. Bessa centers real
          stories, real people, and real community.
        </Text>
      </MediaRight>
      <Section>
        <Heading>What is Bessa?</Heading>
        <Text>
          Bessa is a gay social media app and LGBTQ social networking app made
          by and for the LGBTQ community. It&apos;s a place to post and share
          LGBTQ content, connect with local LGBTQ people, and build friendships
          that go beyond likes or dating. Unlike other platforms, Bessa is an
          inclusive social platform focused on authentic connection, queer
          community, and shared experiences. Whether you&apos;re looking for
          events, friends, or just a space where you feel seen, Bessa helps you
          find your people and stay connected.
        </Text>
        <Heading>Is Bessa free to use?</Heading>
        <Text>
          Yes! Bessa is a free LGBTQ community app. You can post and share LGBTQ
          content, message other users, explore queer-friendly places, and join
          conversations without paying. Optional upgrades are available for
          those who want additional features or wish to support the platform.
        </Text>
        <Heading>Who can join Bessa?</Heading>
        <Text>
          Bessa is designed for everyone under the LGBTQ umbrella. While allies
          are welcome to support the project, the app itself is built to serve
          LGBTQ users who want space to connect, share experiences, and find
          each other outside of hookup culture.
        </Text>
        <Heading>How is Bessa different from Grindr, HER, or Taimi?</Heading>
        <Text>
          Unlike dating apps, Bessa is a non-dating LGBTQ app. It&apos;s a
          Grindr alternative for LGBTQ people who are looking to build
          friendships, explore queer culture, and engage with others through
          shared content and events. If you&apos;re tired of swiping and want an
          app like HER or Taimi without hookup culture, Bessa offers a
          refreshing alternative.
        </Text>
        <Heading>Is Bessa available for iPhone and Android?</Heading>
        <Text>
          Yes! Bessa is available on both iOS and Android. Just search for it in
          the{" "}
          <Link
            href={
              "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone"
            }
            fontWeight={700}
          >
            App Store
          </Link>{" "}
          or{" "}
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.bessa.bessa"
            }
            fontWeight={700}
          >
            Google Play
          </Link>{" "}
          to start connecting. The app works across devices so you can keep up
          with your community anywhere.
        </Text>
        <Heading>Can I post events or queer-friendly places?</Heading>
        <Text>
          Absolutely. With a subscription, Bessa lets you post and share LGBTQ
          content like events, meetups, and safe spaces for the community.
          Whether you&apos;re promoting a queer art show or sharing your
          favorite inclusive bookstore, Bessa helps you connect with local LGBTQ
          people in real life.
        </Text>
        <Heading>How do I support Bessa?</Heading>
        <Text>
          Bessa is an independent LGBTQ social networking app, and community
          support helps it grow. You can{" "}
          <Link
            href={"/donate"}
            title={"Fuel the Next Generation of Gay Social Media"}
            fontWeight={700}
          >
            donate or become a sponsor
          </Link>{" "}
          to help keep the app running, fund new features, and support queer
          connection. Sponsorships include perks like a custom badge and public
          recognition.
        </Text>
      </Section>
    </>
  );
}
