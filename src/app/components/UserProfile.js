import React from "react";
import PropTypes from "prop-types";

export default function UserProfile({ user, posts,removeUser }) {
  const userPost = posts.find((post) => post.userId === user.id) || null;
  return (
    <div className=" p-5 border border-gray-200 bg-yellow-100 rounded-md w-1/2 ">
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-row w-full items-center justify-between ">
          <div className="flex flex-col items-start  gap-2">
            <span className="font-bold">
              {user.name} {user.username}
            </span>
            <p className="text-sm">
              <b>Email:</b>
              {user.email}
            </p>
          </div>
          <button onClick={()=>removeUser(user.id)} className="bg-orange-700 text-white px-3">Delete</button>
        </div>
        <div>
          {userPost ? (
            <div
              key={userPost.id}
              className="border border-gray-200 p-2 rounded-md"
            >
              <h3 className="text-lg font-bold">{userPost.title}</h3>
              <p>{userPost.body}</p>
            </div>
          ) : (
            <span>Post bulunamadı</span>
          )}
        </div>
      </div>
    </div>
  );
}
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};
