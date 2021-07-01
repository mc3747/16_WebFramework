import React from "react";
import useFetch from "./useFetch";

export default function HookDemo() {
  const { data, loading, error } = useFetch("users");
  if (loading) return "Loading...";
  if (error) return "Oops!";
  return data[0].username;
}
