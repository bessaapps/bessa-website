import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text
} from "@chakra-ui/react";
import { title } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Interview with the Creator of Sin City Jacks| Queer-Made",
  description: "",
  openGraph: {
    title: "Interview with the Creator of Sin City Jacks| Queer-Made",
    description: ""
    // url: `${url}/stories`
  },
  twitter: {
    title: "Interview with the Creator of Sin City Jacks| Queer-Made",
    description: ""
  }
};

export default function InterviewWithTheCreatorOfSinCityJacks() {
  return (
    <>
      <Box
        bgImage={"/images/gradients/mesh-4.png"}
        bgPosition={"center"}
        bgSize={"cover"}
      >
        <Center minH={"calc(100vh - 129px)"} p={4}>
          <Stack textAlign={"center"}>
            <Box>
              <Tag colorScheme={"whiteAlpha"} size={"lg"} mb={4}>
                Queer-Made
              </Tag>
            </Box>
            <Heading as={"h1"} color={"white"} textAlign={"center"}>
              Interview with the Creator of Sin City Jacks
            </Heading>
          </Stack>
        </Center>
      </Box>
      <SimpleGrid columns={2} gap={4}>
        <GridItem
          minH={"calc(100vh - 80px)"}
          px={[8, 16, 32]}
          py={[16, 32, 64]}
        >
          <Flex
            direction={"column"}
            h={"100%"}
            justify={"space-between"}
            gap={32}
          >
            <Stack>
              <Heading as={"p"} fontSize={"1.5rem"} mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid assumenda consequatur fugit veniam. Alias aliquid
                delectus ducimus, eligendi esse id impedit inventore, ipsam iste
                molestiae porro quia, quisquam rerum sunt.
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                aperiam at deleniti deserunt esse harum illum ipsam maxime
                molestias neque non odio, optio, possimus praesentium quas quo
                quod quos temporibus!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aperiam delectus est itaque maiores quia repellendus sed sint!
                Aliquam at corporis delectus error fuga harum id ipsam nulla
                officiis voluptate.
              </Text>
            </Stack>
            <Flex align={"center"} gap={4}>
              <Avatar size={"2xl"} />
              <Box>
                <Heading as={"h3"}>Joshua Smitth</Heading>
                <Text>Creator of Sin City Jacks</Text>
                <Text fontWeight={600}>@sincityjacks</Text>
                <Link
                  href={"https://linktr.ee/sincityjacks"}
                  title={"Sin City Jacks"}
                >
                  linktr.ee/sincityjacks
                </Link>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          bgImage={"https://bit.ly/naruto-sage"}
          bgPosition={"center"}
          bgSize={"cover"}
          style={{ filter: "grayscale(1)" }}
        />
      </SimpleGrid>
      <Container maxW={"container.xl"} py={[16, 32, 64]}>
        <Stack gap={4}>
          <Heading>Heading</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            doloremque facilis nisi numquam vitae! At, cum deserunt eius et
            libero ullam! Error eveniet ex, in perspiciatis quod sed similique
            voluptas.
          </Text>
          <AspectRatio maxW={"100%"} ratio={4 / 3}>
            <Image
              src={"https://bit.ly/naruto-sage"}
              alt={"Interview with the Creator of Sin City Jacks| Queer-Made"}
              height={1000}
              width={1000}
              objectFit={"cover"}
            />
          </AspectRatio>
          <Text color={"gray.500"} fontSize={".75rem"}>
            Credit
          </Text>
          <Heading>Heading</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            doloremque facilis nisi numquam vitae! At, cum deserunt eius et
            libero ullam! Error eveniet ex, in perspiciatis quod sed similique
            voluptas.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
