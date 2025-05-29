import { Container, Heading, Text, Link, Button } from "@chakra-ui/react";
import { title, url } from "@/utils/constants";

export const metadata = {
  title: `FAQ | ${title}`,
  description:
    "Get answers about Bessa, the LGBTQ Social Networking App. Learn how to connect, share, and discover queer-friendly features and community support.",
  openGraph: {
    title: `FAQ | ${title}`,
    description:
      "Get answers about Bessa, the LGBTQ Social Networking App. Learn how to connect, share, and discover queer-friendly features and community support.",
    url: `${url}/faq`
  },
  twitter: {
    title: `FAQ | ${title}`,
    description:
      "Get answers about Bessa, the LGBTQ Social Networking App. Learn how to connect, share, and discover queer-friendly features and community support."
  }
};

export default function FAQ() {
  return (
    <Container maxW={"container.xl"} my={16}>
      <Heading as={"h1"} mb={4}>
        Frequently Asked Questions
      </Heading>
      <Text mb={4}>
        Everything you need to know about the LGBTQ Social Networking App built
        for real community.
      </Text>
      <Heading mb={4}>What is Bessa?</Heading>
      <Text mb={4}>
        Bessa is an <strong>LGBTQ social networking app</strong> designed for
        genuine queer connection. It&apos;s a queer-friendly social app where
        gay, lesbian, trans, and nonbinary people can meet, share, and discover
        content together. As an inclusive social platform, Bessa helps users
        find LGBTQ friends online and connect with local LGBTQ people in
        meaningful ways.
      </Text>
      <Heading mb={4}>Is Bessa free to use?</Heading>
      <Text mb={4}>
        Yes! Bessa is a free LGBTQ community app. You can post and share LGBTQ
        content, message other users, explore queer-friendly places, and join
        conversations without paying. Optional upgrades are available for those
        who want additional features or wish to support the platform.
      </Text>
      <Heading mb={4}>Who can join Bessa?</Heading>
      <Text mb={4}>
        Bessa is designed for everyone under the LGBTQ umbrella. While allies
        are welcome to support the project, the app itself is built to serve
        LGBTQ users who want space to connect, share experiences, and find each
        other outside of hookup culture.
      </Text>
      <Heading mb={4}>
        How is Bessa different from Grindr, HER, or Taimi?
      </Heading>
      <Text mb={4}>
        Unlike dating apps, Bessa is a non-dating LGBTQ app. It&apos;s a Grindr
        alternative for LGBTQ people who are looking to build friendships,
        explore queer culture, and engage with others through shared content and
        events. If you&apos;re tired of swiping and want an app like HER or
        Taimi without hookup culture, Bessa offers a refreshing alternative.
      </Text>
      <Heading mb={4}>Is Bessa available for iPhone and Android?</Heading>
      <Text mb={4}>
        Yes! Bessa is available on both iOS and Android. Just search for it in
        the{" "}
        <Link
          href={
            "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone"
          }
          fontWeight={800}
        >
          App Store
        </Link>{" "}
        or{" "}
        <Link
          href={"https://play.google.com/store/apps/details?id=com.bessa.bessa"}
          fontWeight={800}
        >
          Google Play
        </Link>{" "}
        to start connecting. The app works across devices so you can keep up
        with your community anywhere.
      </Text>
      <Heading mb={4}>Can I post events or queer-friendly places?</Heading>
      <Text mb={4}>
        Absolutely. With a subscription, Bessa lets you post and share LGBTQ
        content like events, meetups, and safe spaces for the community. Whether
        you&apos;re promoting a queer art show or sharing your favorite
        inclusive bookstore, Bessa helps you connect with local LGBTQ people in
        real life.
      </Text>
      <Heading mb={4}>How do I support Bessa?</Heading>
      <Text mb={4}>
        Bessa is an independent LGBTQ social networking app, and community
        support helps it grow. You can{" "}
        <Link
          href={"/donate"}
          title={`Sponsor & Donate | ${title}`}
          fontWeight={800}
        >
          donate or become a sponsor
        </Link>{" "}
        to help keep the app running, fund new features, and support queer
        connection. Sponsorships include perks like a custom badge and public
        recognition.
      </Text>
      <Link href={"/"} title={"Bessa LGBTQ Social Networking App"}>
        <Button colorScheme={"primary"} size={"lg"} my={12}>
          Learn More
        </Button>
      </Link>
    </Container>
  );
}
