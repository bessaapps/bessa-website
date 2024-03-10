"use client";

import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import Authentication from "@/components/Authentication";
import Tiptap from "@/components/Tiptap";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@/context/UserContext";

export default function Emails() {
  const [subject, setSubject] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const { user } = useUser();

  const handleSubmit = (text, html) => {
    if (isFetching) return;
    setIsFetching(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/actions/send-emails-to-users`,
        { subject, text, html },
        { headers: { Authorization: user.token } }
      )
      .then(() => {
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(error);
        alert(`There was an error: ${JSON.stringify(error)}`);
        setIsFetching(false);
      });
  };

  return (
    <section>
      <Authentication />
      <Container maxW={"container.xl"} py={16}>
        <Heading as={"h1"} mb={4}>
          Emails
        </Heading>
        <Text>Send email to all members.</Text>
        <FormControl isRequired>
          <FormLabel>Subject</FormLabel>
          <Input
            value={subject}
            onChange={(event) => setSubject(event.currentTarget.value)}
            mb={4}
          />
        </FormControl>
        <Tiptap handleSubmit={handleSubmit} isLoading={isFetching} />
      </Container>
    </section>
  );
}
