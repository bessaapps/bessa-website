"use client";

import Authentication from "@/components/Authentication";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import {
  Container,
  Heading,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";

export default function Pages() {
  const [messages, setMessages] = useState([]);
  const [isFetchingMessages, setIsFetchingMessages] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (isFetchingMessages || !user?.accessToken) return;
    setIsFetchingMessages(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
        headers: { Authorization: user?.accessToken }
      })
      .then((response) => {
        setMessages(response.data);
        setIsFetchingMessages(false);
      })
      .catch((error) => {
        console.error(error);
        setIsFetchingMessages(false);
      });
  }, [user]);

  return (
    <section>
      <Authentication />
      <Container maxW={"container.xl"} py={16}>
        <Heading as={"h1"} mb={4}>
          Messages
        </Heading>
        <SkeletonText isLoaded={!isFetchingMessages}>
          <TableContainer>
            <Table variant={"simple"} size={"xs"}>
              <Thead>
                <Tr>
                  <Th>Message</Th>
                </Tr>
              </Thead>
              <Tbody>
                {messages?.map((message) => (
                  <Tr key={message._id} _hover={{ bg: "gray.50" }}>
                    <Td>
                      <Text>{message?.content}</Text>
                      <Text color={"gray.500"} fontSize={"xs"}>
                        senderId: {message?.senderId}, recipientId:{" "}
                        {message?.recipientId}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </SkeletonText>
      </Container>
    </section>
  );
}
