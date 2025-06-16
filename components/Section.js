import { Center, Container, Stack } from "@chakra-ui/react";
import { sectionHeight } from "@/utils/constants";

export default function Section({ children }) {
  return (
    <Container maxW={"container.xl"}>
      <Center minH={sectionHeight} py={[16, 32, 64]}>
        <Stack gap={4}>{children}</Stack>
      </Center>
    </Container>
  );
}
