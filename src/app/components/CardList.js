import React from "react";
import Card from "./Card";

export default function CardList({ users }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {users.map((user) => {
        return (
          <div key={user.login.uuid}>
            <Card user={user} />
          </div>
        );
      })}
    </div>
  );
}
