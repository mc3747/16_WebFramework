import React, { useState, useEffect } from "react";

export default function InlineDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}users`)
      .then(response => {
        if (response.ok) return response.json();
        throw response;
      })
      .then(json => {
        setUsers(json);
      })
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Oops!";
  return users[0].username;
}
