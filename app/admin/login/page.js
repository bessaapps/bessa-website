"use client";

import { useUser } from "@/context/UserContext";
import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useUser();
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential?.user);
        router.push("/admin/users");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <Container py={16}>
        <form onSubmit={handleSubmit}>
          <Heading as={"h1"} mb={4}>
            Login
          </Heading>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              mb={2}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              mb={4}
            />
          </FormControl>
          <Button colorScheme={"primary"} type={"submit"}>
            Let&apos;s Go!
          </Button>
        </form>
      </Container>
    </section>
  );
}
