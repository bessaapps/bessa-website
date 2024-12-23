import {
  Container,
  Flex,
  Heading,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  Link
} from "@chakra-ui/react";
import Image from "next/image";
import Article from "/images/blog-content-writer.png";

export const metadata = {
  title: "Blog Content Writer | Bessa | An LGBTQ Social Media App",
  description:
    "Are you deeply involved in the LGBTQ and/or BIPOC communities? Do you love to write fun, impactful, and informative content with a casual voice? A blog content writer for Bessa, writes work that LGBTQ communities find valuable, engaging, shareable and enjoy reading, including topics such as LGBTQ travel, tech, sexual health, rights, politics, pop culture, news, sex, dating, and entertainment. And, much more!",
  openGraph: {
    title: "Blog Content Writer | Bessa | An LGBTQ Social Media App",
    description:
      "Are you deeply involved in the LGBTQ and/or BIPOC communities? Do you love to write fun, impactful, and informative content with a casual voice? A blog content writer for Bessa, writes work that LGBTQ communities find valuable, engaging, shareable and enjoy reading, including topics such as LGBTQ travel, tech, sexual health, rights, politics, pop culture, news, sex, dating, and entertainment. And, much more!",
    url: "https://getbessa.com/blog-content-writer",
    siteName: "Bessa",
    images: [
      {
        url: "https://getbessa.com/images/celebrating-international-transgender-day-of-visibility.png",
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
  "@type": "JobPosting",
  title: "LGBTQ Blog Content Writer",
  description:
    "Are you deeply involved in the LGBTQ and/or BIPOC communities? Do you love to write fun, impactful, and informative content with a casual voice? A blog content writer for Bessa, writes work that LGBTQ communities find valuable, engaging, shareable and enjoy reading, including topics such as LGBTQ travel, tech, sexual health, rights, politics, pop culture, news, sex, dating, and entertainment. And, much more!",
  datePosted: "2024-07-10",
  employmentType: "CONTRACTOR",
  hiringOrganization: {
    "@type": "Organization",
    name: "Bessa Community Apps",
    sameAs: "https://www.getbessa.com",
    logo: "https://www.getbessa.com/images/logo.png"
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "USA"
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      minValue: 8,
      maxValue: 24,
      unitText: "HOUR"
    }
  }
};

export default function BlogContentWriter() {
  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container maxW={"container.sm"} py={16}>
        <Image
          src={Article}
          alt={"Celebrating International Transgender Day of Visibility"}
          style={{ borderRadius: 8 }}
        />
      </Container>
      <Container maxW={"container.sm"} pb={16}>
        <Heading as={"h1"} mb={4}>
          Blog Content Writer
        </Heading>
        <Flex gap={4} mb={4}>
          <Tag colorScheme={"primary"}>Contract</Tag>
          <Tag colorScheme={"primary"}>$8-24/hr.</Tag>
          <Tag colorScheme={"primary"}>Remote</Tag>
        </Flex>
        <Text mb={4}>
          Are you deeply involved in the LGBTQ and/or BIPOC communities? Do you
          love to write fun, impactful, and informative content with a casual
          voice? A blog content writer for Bessa, writes work that LGBTQ
          communities find valuable, engaging, shareable and enjoy reading,
          including topics such as LGBTQ travel, tech, sexual health, rights,
          politics, pop culture, news, sex, dating, and entertainment. And, much
          more!
        </Text>
        <Heading mb={4}>Responsibilities and Duties</Heading>
        <UnorderedList spacing={2} mb={4}>
          <ListItem>
            Write well-structured and engaging articles of 700 words or more
            that are interesting to LGBTQ people
          </ListItem>
          <ListItem>
            Incorporate calls to action, mainly for Bessa, in articles
          </ListItem>
          <ListItem>
            Incorporate search-engine-friendly keywords and content in articles.
          </ListItem>
          <ListItem>
            Make revisions to articles according to editor feedback
          </ListItem>
          <ListItem>
            Collaborate on articles both, suggested by you and the editor
          </ListItem>
        </UnorderedList>
        <Heading mb={4}>Qualifications</Heading>
        <UnorderedList spacing={2} mb={4}>
          <ListItem>
            Knowledge of lesbian, gay, bisexual, transgender, and/or queer
            communities, current events, controversial topics, and other
            interesting topics
          </ListItem>
          <ListItem>Knowledge of Bessa, an LGBTQ social media app</ListItem>
          <ListItem>
            Ability to write easy-to-read, concise, and engaging articles with a
            casual voice
          </ListItem>
          <ListItem>Experience with Google Docs or Microsoft Word</ListItem>
          <ListItem>
            Basic &quot;about the author&quot; information such as a picture,
            pen name, website (or other link), and a short bio
          </ListItem>
        </UnorderedList>
        <Text as={"i"} fontWeight={"bold"}>
          Send resume and samples to{" "}
          <Link href={"mailto:topher@getbessa.com"}>topher@getbessa.com</Link>.
        </Text>
      </Container>
    </section>
  );
}
