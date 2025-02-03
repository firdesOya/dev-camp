"use client";
import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  async function getData() {
    const [userResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      ),
    ]);
    setUsers(userResponse);
    setPosts(postResponse);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Kullanıcı Listesi</h2>
      <UsersList users={users} posts={posts} />
    </div>
  );
}
