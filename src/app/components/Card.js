
import React from "react";

export default function Card({ user }) {
  return (
    <div className=" p-5 border border-gray-200 bg-yellow-200 rounded-md w-full md:w-[220px] h-[200px]">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src={user.picture.thumbnail}
            alt="Profile image"
            className="rounded-full"
          />
          <span>
            {user.name.first} {user.name.last}
          </span>
        </div>
        <p className="text-sm">{user.email}</p>
      </div>
    </div>
  );
}
