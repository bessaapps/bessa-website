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
import {
  FiAlertTriangle,
  FiCheck,
  FiFlag,
  FiSend,
  FiTrash
} from "react-icons/fi";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const { user } = useUser();

  const approve = (post) => {
    if (isFetchingPosts) return;
    setIsFetchingPosts(true);
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts`,
        { _id: post?._id, isUnderReview: false },
        { headers: { Authorization: user?.accessToken } }
      )
      .then(() =>
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/actions/send-mail`, {
            to: post?.user?.[0]?.email,
            subject: "Your post has been approved!",
            text: "Your post has been approved. It's now visible to everyone!",
            html: `<p>Your post has been approved. It's now visible to everyone!</p>`
          })
          .then(() => {
            const postId = post?._id;

            setPosts(
              posts?.map((post) =>
                post?._id === postId ? { ...post, isUnderReview: false } : post
              )
            );
            setIsFetchingPosts(false);
          })
          .catch((error) => {
            console.error(error);
            setIsFetchingPosts(false);
          })
      )
      .catch((error) => {
        console.error(error);
        setIsFetchingPosts(false);
      });
  };

  const destroy = (post) => {
    if (isFetchingPosts) return;
    setIsFetchingPosts(true);
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        params: { _id: post?._id },
        headers: { Authorization: user?.accessToken }
      })
      .then(() => {
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/actions/send-mail`, {
            to: post?.user?.[0]?.email,
            subject: "Your post has been deleted.",
            text: "It looks like your post violates our community's rules! Your post has been deleted to protect members. If you need help, visit: https://bessssssa.com to learn more.",
            html: `<p>It looks like your post violates our community's rules! Your post has been deleted to protect members. If you need help, visit: https://bessssssa.com to learn more.</p>`
          })
          .then(() => {
            const postId = post?._id;

            setPosts(posts?.filter((post) => post?._id !== postId));
            setIsFetchingPosts(false);
          })
          .catch((error) => {
            console.error(error);
            setIsFetchingPosts(false);
          });
      })
      .catch((error) => {
        console.error(error);
        setIsFetchingPosts(false);
      });
  };

  useEffect(() => {
    if (isFetchingPosts || !user?.accessToken) return;
    setIsFetchingPosts(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        headers: { Authorization: user?.accessToken }
      })
      .then((response) => {
        setPosts(response.data);
        setIsFetchingPosts(false);
      })
      .catch((error) => {
        console.error(error);
        setIsFetchingPosts(false);
      });
  }, [user]);

  return (
    <>
      <Authentication />
      <section>
        <Container maxW={"container.xl"} py={16}>
          <Heading as={"h1"} mb={4}>
            Posts
          </Heading>
          <SkeletonText isLoaded={!isFetchingPosts}>
            <TableContainer>
              <Table variant={"simple"} size={"xs"}>
                <Thead>
                  <Tr>
                    <Th />
                    <Th>Description</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {posts?.map((post) => (
                    <Tr key={post?._id} _hover={{ bg: "gray.50" }}>
                      <Td>
                        <Flex align={"center"}>
                          {post?.isUnderReview && (
                            <Flex mr={2}>
                              <FiAlertTriangle />
                            </Flex>
                          )}
                          {post?.reporter && (
                            <Flex mr={2}>
                              <FiFlag />
                            </Flex>
                          )}
                        </Flex>
                      </Td>
                      <Td>
                        <Text>{post?.description}</Text>
                        <Text color={"gray.500"} fontSize={"xs"}>
                          _id: {post?._id}, userId: {post?.userId}
                        </Text>
                      </Td>
                      <Td>
                        <Flex align={"center"}>
                          <Button onClick={() => approve(post)} mr={2}>
                            <FiCheck /> + <FiSend />
                          </Button>
                          <Button onClick={() => destroy(post)}>
                            <FiTrash /> + <FiSend />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </SkeletonText>
        </Container>
      </section>
    </>
  );
}
