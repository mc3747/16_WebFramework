import React from "react";
import { getUsers } from "./userService";
import { useQuery } from "react-query";

export default function ReactQueryDemo() {
  const { data, isLoading, error } = useQuery("users", getUsers);
  if (isLoading) return "Loading...";
  if (error) return "Oops!";
  return data[0].username;
}
