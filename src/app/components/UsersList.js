import React from "react";
import UserProfile from "./UserProfile";

export default function UsersList({ users, posts }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kullanıcı Listesi</h2>
      {users.map((user) => {
        return <UserProfile key={user.id} user={user} posts={posts} />;
      })}
    </div>
  );
}
