"use client";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Hata oluştu"));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Kullanıcı Listesi</h2>
      <CardList users={users} />
    </div>
  );
}
