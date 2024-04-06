"use client";

import Authentication from "@/components/Authentication";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Flex,
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
import { FiAlertTriangle, FiSend, FiTrash } from "react-icons/fi";
import dayjs from "dayjs";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isFetchingUsers, setIsFetchingUsers] = useState(false);
  const { user } = useUser();

  const destroy = (_id, email) => {
    if (isFetchingUsers) return;
    setIsFetchingUsers(true);
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        params: { _id },
        headers: { Authorization: user?.accessToken }
      })
      .then(async () => {
        email &&
          (await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/actions/send-mail`, {
              to: email,
              subject: "Your account has been deleted.",
              text: "It looks like your account violates our community's rules! Your account has been deleted to protect members. If you need help, visit: https://bessssssa.com to learn more.",
              html: `<p>It looks like your account violates our community's rules! Your account has been deleted to protect members. If you need help, visit: https://bessssssa.com to learn more.</p>`
            })
            .catch((error) => console.error(error)));
        setUsers(users?.filter((user) => user?._id !== _id));
        setIsFetchingUsers(false);
      })
      .catch((error) => {
        console.error(error);
        setIsFetchingUsers(false);
      });
  };

  useEffect(() => {
    if (isFetchingUsers || !user?.accessToken) return;
    setIsFetchingUsers(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        headers: { Authorization: user?.accessToken }
      })
      .then((response) => {
        console.log("response", response.data);
        setUsers(response.data);
        setIsFetchingUsers(false);
      })
      .catch((error) => {
        console.error(error);
        setIsFetchingUsers(false);
      });
  }, [user]);

  return (
    <section>
      <Authentication />
      <Container maxW={"container.xl"} py={16}>
        <Heading as={"h1"} mb={4}>
          Users ({users?.length})
        </Heading>
        <SkeletonText isLoaded={!isFetchingUsers}>
          <TableContainer>
            <Table variant={"simple"} size={"xs"}>
              <Thead>
                <Tr>
                  <Th />
                  <Th>Username</Th>
                  <Th>Join Date</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {users?.map((user) => (
                  <Tr key={user._id} _hover={{ bg: "gray.50" }}>
                    <Td>
                      {!user?.lastLoginAt && (
                        <Flex align={"center"}>
                          <Flex mr={2}>
                            <FiAlertTriangle />
                          </Flex>
                          <Text fontSize={"xs"}>Hasn&apos;t logged in.</Text>
                        </Flex>
                      )}
                    </Td>
                    <Td>
                      <Text>
                        {user?.username}
                        {user?.profile?.headline &&
                          ` (${user.profile.headline})`}
                      </Text>
                      <Text color={"gray.500"} fontSize={"xs"}>
                        {user?._id}
                      </Text>
                    </Td>
                    <Td>{dayjs(user?.createdAt).format("MMM 'YY")}</Td>
                    <Td>
                      <Button
                        onClick={() => destroy(user?._id, user?.email)}
                        mr={2}
                      >
                        <FiTrash /> + <FiSend />
                      </Button>
                      <Button onClick={() => destroy(user?._id)}>
                        <FiTrash />
                      </Button>
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
