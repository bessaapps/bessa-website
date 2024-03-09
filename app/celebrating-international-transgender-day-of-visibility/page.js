import { Container, Heading, Text } from "@chakra-ui/react";
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
        <Text mb={4}>
          The LGBTQIA+ community plays a crucial role in the well-being and
          development of individuals. Community is essential for fostering
          connections, providing support, promoting personal and collective
          growth, and contributing to the overall health and well-being of
          individuals. It fulfills fundamental human needs for connection,
          belonging, and shared purpose, especially with LGBTQIA+ people.
        </Text>
        <Heading as={"h2"} mb={4}>
          What does LGBTQIA+ Mean?
        </Heading>
        <Text mb={4}>
          The acronym LGBTQIA+ stands for Lesbian, Gay, Bisexual, Transgender,
          Queer or Questioning, Intersex, and Asexual or Ally. This inclusive
          term represents a diverse range of sexual orientations, gender
          identities, and expressions. The plus at the end indicates that the
          acronym is not exhaustive and is open to additional identities and
          experiences.
        </Text>
      </Container>
    </section>
  );
}
