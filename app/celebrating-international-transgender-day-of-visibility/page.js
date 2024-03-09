import { Container, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import Article from "/images/celebrating-international-transgender-day-of-visibility.png";

export const metadata = {
  title:
    "Celebrating International Transgender Day of Visibility | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
  // description:
  //   "Community is essential for fostering connections, providing support, promoting personal and collective growth, and contributing to the overall health and well-being of individuals. It fulfills fundamental human needs for connection, belonging, and shared purpose, especially with LGBTQIA+ people."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Celebrating International Transgender Day of Visibility | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community",
  // description:
  //   "Community is essential for fostering connections, providing support, promoting personal and collective growth, and contributing to the overall health and well-being of individuals. It fulfills fundamental human needs for connection, belonging, and shared purpose, especially with LGBTQIA+ people.",
  url: "https://bessssssa.com/celebrating-international-transgender-day-of-visibility",
  image:
    "https://bessssssa.com/images/celebrating-international-transgender-day-of-visibility.png",
  datePublished: "2024-03-09T00:00:00+00:00",
  dateModified: "2024-03-09T00:00:00+00:00",
  author: "Topher"
};

export default function CelebratingInternationalTransgenderDayOfVisibility() {
  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container maxW={"container.lg"} py={16}>
        <Image
          src={Article}
          alt={"Celebrating International Transgender Day of Visibility"}
        />
      </Container>
      <Container>
        <Heading as={"h1"} mb={4}>
          Celebrating International Transgender Day of Visibility
        </Heading>
        <Text fontWeight={"bold"} mb={4}>
          Firstly, please don&apos;t out trans people. Also, don&apos;t out
          trans people. Is this in bold?
        </Text>
        <Text mb={4}>
          Cis people, heterosexuals, and, yes, even people of the LGBTQIA+
          community need an occasional reminder of the various letters in the
          LGBTQIA+ acronym. Creating safe and inclusive communities is hard
          work, but it can also be fun, enlightening, social, and liberating to
          all people. International Transgender Day of Visibility (#TDOV), every
          March 31st, is a wonderful time to celebrate and strengthen the
          transgender community and take time to realize the importance and
          rights of transgender people providing them a voice in the world and
          the safety and respect they deserve. People can celebrate
          International Transgender Day of Visibility and the transgender and
          LGBTQIA+ communities by listening and giving space to transgender
          people, educating themselves and others about culture, history,
          policy, and identity, becoming active in communities, yes, donating to
          causes that they identify with, spreading awareness on social media,
          and so much more.
        </Text>
        {/*<Heading mb={4}>What does Transgender and Intersex Mean?</Heading>*/}
        {/*<Text mb={4}></Text>*/}
        <Heading mb={4}>Pass the Mic</Heading>
        <Text mb={4}>
          There are so many intelligent transgender people and so many good
          ideas and stories to be heard by them and others. Why doesn&apos;t
          everyone just stop blabbeirng and sit back and take one or two in for
          a bit? People can celebrate International Transgender Day of
          Visibility by passing the mic. Celebrating holidays and dedications
          like Internal Transgender Day of Visibility is often about listening
          and giving the space for these people to speak up, share, and, yes,
          help shape our communities and culture as a whole. People can learn a
          lot from transgender stories.
        </Text>
        <Heading mb={4}>
          Learning the Culture, History, Policy, and Identity of Transgender
          People
        </Heading>
        <Text mb={4}>
          The culture and history of transgender people can often be sad, but
          also a true story of inspiration and triumph among friends, family,
          neighbors, and co-workers. A valuable way to celebrate International
          Transgender day of Visibility is for people to enrich their own
          knowledge about the culture, history, government policy, and gender,
          sexual, and relational identities of transgender people. (Google up
          the Gender Unicorn. It&apos;s a great starting point.) Sitting back
          and listening to the story or just learning terminology is a great way
          to celebrate and enrich conversation, but also discourage
          discrimination again transgender people.
        </Text>
        <Heading mb={4}>Leveling Up in Communities!</Heading>
        <Text mb={4}>
          Many transgender communities are welcome to cis and/or straight people
          as well. In fact, these communities are often enriched by outsiders.
          People looking to celebrate International Transgender Day of
          Visibility can help bring transgender communities, groups, and
          organizations to the next level by being an active member. People who
          aren&apos;t transgender can, for example, still use their voice in the
          world to spread awareness or lend an ear or friendship to someone in
          need. People who aren&apos;t transgender can still elebrate
          transgender people by joining and being active in communities and the
          experience can be very rewarding for everyone.
        </Text>
        <Text mb={4}>
          Oh yeah! And, by the way, Bessa is right here patiently waiting and
          welcoming everyone to its safe and diverse community!{" "}
          <Link
            href={"/"}
            title={
              "Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
            }
            color={"primary.500"}
          >
            Download it and join here for FREE!
          </Link>
        </Text>
        {/*  #TransIsBeautiful to see the amazing community that pops up throughout*/}
      </Container>
    </section>
  );
}
