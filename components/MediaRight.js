import { Flex, GridItem, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

export default function MediaRight({ lead, content, bottomContent, bgImage }) {
  return (
    <SimpleGrid columns={[1, 2]} gap={4}>
      <GridItem px={[8, 16, 32]} py={[16, 32, 64]}>
        <Flex
          direction={"column"}
          h={"100%"}
          justify={"space-between"}
          gap={32}
        >
          <Stack>
            <Heading as={"p"} fontSize={"1.5rem"} mb={4}>
              {lead}
            </Heading>
            {content}
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
