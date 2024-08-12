import { Container, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import Article from "/images/celebrating-international-transgender-day-of-visibility.png";
import { blogCategories, blogPosts, title, url } from "@/utils/constants";

export const metadata = {
  title: `${blogPosts[1].title} | ${title}`,
  openGraph: {
    title: `${blogPosts[1].title} | ${title}`,
    url: `${url}/blog/guides/celebrating-international-transgender-day-of-visibility`,
    siteName: "Bessa",
    images: [
      {
        url: `${url}/images/celebrating-international-transgender-day-of-visibility.png`,
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: `${blogPosts[1].title} | ${title}`,
  url: `${url}/blog/guides/celebrating-international-transgender-day-of-visibility`,
  image: `${url}/images/celebrating-international-transgender-day-of-visibility.png`,
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
          alt={blogPosts[1].title}
          style={{ borderRadius: 8 }}
        />
      </Container>
      <Container pb={16}>
        <Text color="primary.500" fontWeight={"bold"}>
          <Link href={`/blog/${blogCategories[0].slug}`}>
            {blogCategories[0].name}
          </Link>
        </Text>
        <Heading as={"h1"} mb={4}>
          {blogPosts[1].title}
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
          like International Transgender Day of Visibility is often about
          listening and giving the space for these people to speak up, share,
          and, yes, help shape communities and culture as a whole. People can
          learn a lot from transgender stories.
        </Text>
        <Heading mb={4}>
          Learning the Culture, History, Policy, and Identity of Transgender
          People
        </Heading>
        <Text mb={4}>
          The culture and history of transgender people can often be sad, but
          also a true story of inspiration and triumph among friends, family,
          neighbors, and co-workers. A valuable way to celebrate International
          Transgender Day of Visibility is for people to enrich their own
          knowledge about the culture, history, government policy, and gender,
          sexual, and relational identities of transgender people. (Google up
          the Gender Unicorn. It&apos;s a great starting point.) Sitting back
          and listening to the story or just learning terminology is a great way
          to celebrate and enrich conversation, but also discourage
          discrimination against transgender people.
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
          need. People who aren&apos;t transgender can still celebrate
          transgender people by joining and being active in communities and the
          experience can be very rewarding for everyone.
        </Text>
        <Text mb={4}>
          Oh yeah! And, by the way, Bessa is right here patiently waiting and
          welcoming everyone to its safe and diverse community!{" "}
          <Link
            href={"/"}
            title={"Bessa | An LGBTQ Social Media App"}
            color={"primary.500"}
          >
            Download it and join here for FREE!
          </Link>
        </Text>
        <Heading mb={4}>Yes, Money</Heading>
        <Text mb={4}>
          Yes, yes but please don&apos;t skip this one! Be real; movements in
          this country aren&apos;t free. Besides people always give the ones
          they care about money for their birthday and for Christmas, so why
          should this celebration be different? Donating money, items, time, or
          other resources to those people and organizations in need can be an
          honorable way to celebrate International Transgender Day of
          Visibility. Even if funds are tight, people can volunteer or donate
          material resources. And if there&apos;s even just a little in the
          wallet, or a lot, finding the right people, organizations, or
          charities is important. Finding a charity that has shared interests
          can make monetary or other donations mutually beneficial and very
          exciting.
        </Text>
        <Text mb={4}>
          A great place to start is right here! Bessa has a fair amount of costs
          to keep running. If you like Bessa or appreciate the communities its
          trying to build, please check out the{" "}
          <Link
            href={"/donate"}
            title={"Give | Bessa LGBTQ Social Media App"}
            color={"primary.500"}
          >
            Donations Page
          </Link>{" "}
          page to learn more and hopefully contribute.
        </Text>
        <Heading mb={4}>#TransIsBeautiful</Heading>
        <Text mb={4}>
          C&apos;mon! Social media is a blast! People are always all over it
          too. Take a few minutes to post about International Transgender Day of
          Visibility. Sharing stories or anything respectful and genuine can be
          fun and very influential. Even reposting other awesome content about
          International Transgender Day of Visibility is great! People learn and
          take inspiration from others. Social media can be a great start place
          to start change.
        </Text>
        <Text mb={4}>
          This day of visibility is about carving out safe communities and
          giving space and social justice to people who are often marginalized.
          It&apos;s also about being joyful and proud. But get creative! The
          list doesn&apos;t ender here. If nothing else, being kind and having
          fun is the best anyone can do. People should feel safe and feel proud
          to be themselves.
        </Text>
      </Container>
    </section>
  );
}
