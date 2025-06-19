import { Flex, GridItem, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

export default function MediaRight({ lead, bottomContent, bgImage, children }) {
  return (
    <SimpleGrid columns={[1, 2]}>
      <GridItem p={[4, 8, 16]}>
        <Flex
          direction={"column"}
          h={"100%"}
          justify={"space-between"}
          gap={[8, 16, 32]}
        >
          <Stack>
            <Heading as={"p"} fontSize={"1.5rem"} mb={4}>
              {lead}
            </Heading>
            {children}
          </Stack>
          {bottomContent}
        </Flex>
      </GridItem>
      <GridItem
        minH={"calc(100vh - 80px)"}
        bgImage={bgImage}
        bgPosition={"center"}
        bgSize={"cover"}
        style={{ filter: "grayscale(1)" }}
      />
    </SimpleGrid>
  );
}
