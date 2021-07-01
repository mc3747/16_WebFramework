import React, { useState, useEffect } from "react";
import { getUsers } from "./userService";

export default function CentralDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getUsers()
      .then(json => {
        setUsers(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Oops!";
  return users[0].username;
}
