import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box
} from "@chakra-ui/react";

export default function Rules() {
  return (
    <>
      <Alert status={"success"} mb={4}>
        <AlertIcon />
        <Box>
          <AlertTitle>Be Respectful</AlertTitle>
          <AlertDescription>
            Keep this space safe and comfortable for all of its users.
          </AlertDescription>
        </Box>
      </Alert>
      <Alert status={"error"} mb={4}>
        <AlertIcon />
        <Box>
          <AlertTitle>Don&apos;t be a Troll!</AlertTitle>
          <AlertDescription>
            Harassment or otherwise abusive behavior is strictly forbidden.
            Violators will have their accounts deleted.
          </AlertDescription>
        </Box>
      </Alert>
      <Alert status={"error"} mb={12}>
        <AlertIcon />
        <Box>
          <AlertTitle>Keep it Clean!</AlertTitle>
          <AlertDescription>
            The posting of objectionable content is strictly forbidden.
            Violators will have their accounts deleted.
          </AlertDescription>
        </Box>
      </Alert>
    </>
  );
}
