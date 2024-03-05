"use client";

import Authentication from "@/components/Authentication";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isFetchingUsers, setIsFetchingUsers] = useState(false);
  const { user } = useUser();

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
    <>
      <Authentication />
      <section>
        {users?.map((user) => (
          <Text key={user?._id}>{user?._id}</Text>
        ))}
      </section>
    </>
  );
}
