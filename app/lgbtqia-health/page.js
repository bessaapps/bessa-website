"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Select,
  Text
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useState } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "LGBTQIA+ Providers | Bessa | An LGBTQ Social Media App",
  url: "https://getbessa.com/lgbtqia-health",
  datePublished: "2024-05-26T00:00:00+00:00",
  dateModified: "2024-05-26T00:00:00+00:00",
  author: "Topher"
};

export default function LGBTQIAHealth() {
  const [city, setCity] = useState("");
  const [service, setService] = useState("");

  const cities = ["Las Vegas, NV", "San Francisco, CA"];
  const services = [
    "STD Testing",
    "Prescriptions",
    "Treatment",
    "Vaccinations",
    "Mental Health",
    "Trans and Intersex Health"
  ];
  const providers = [
    {
      name: "The Center",
      services: [],
      cities: ["Las Vegas, NV"]
    },
    {
      name: "AHF Wellness Center",
      cities: ["Las Vegas, NV"]
    },
    {
      name: "City Clinic",
      cities: ["San Francisco, CA"]
    }
  ];

  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container maxW={"container.lg"} py={16}>
        <Text align={"right"} mb={4}>
          <Link href={"https://forms.gle/Y4ce5HoaSATqwoXW8"} target={"_blank"}>
            Get Listed for FREE!
          </Link>
        </Text>
        <Flex gap={4} mb={4}>
          <Select
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
          >
            <option value={""}>Select a City</option>
            {cities?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
          <Select
            value={service}
            onChange={(event) => setService(event.currentTarget.value)}
          >
            <option value={""}>Select a Service</option>
            {services?.map((service, index) => (
              <option key={index} value={index}>
                {service}
              </option>
            ))}
          </Select>
        </Flex>
        <Heading as={"h1"}>
          LGBTQIA Providers{city ? ` in ${city}` : ""}
        </Heading>
        {providers
          .filter((provider) => {
            if (!city) {
              return provider;
            } else if (provider?.cities?.includes(city)) {
              return provider;
            }
          })
          .filter((provider) => {
            if (!service) {
              return provider;
            } else if (
              provider?.services
                ?.map((_, index) => index)
                .includes(parseInt(service))
            ) {
              return provider;
            }
          })
          .map((provider, index) => (
            <Card key={index} my={4}>
              <CardBody>
                <Heading size={"md"} mb={2}>
                  {provider.name}
                </Heading>
                <Text mb={4}>{provider?.description}</Text>
                <Text fontWeight={"bold"} mb={4}>
                  {provider?.services
                    ?.map((service) => services?.[service])
                    ?.join(", ")}
                </Text>
                {provider?.addresses?.map((address, index) => (
                  <Text key={index}>{address}</Text>
                ))}
                {provider?.phone}
              </CardBody>
              {provider?.href && (
                <CardFooter>
                  <Link href={provider.href} target={"_blank"}>
                    <Button colorScheme={"primary"}>More Information</Button>
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
      </Container>
    </section>
  );
}
