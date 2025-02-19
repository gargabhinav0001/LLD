"use client";

import React, { useState } from "react";

const Comment = ({ name, reply, hasComments, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 m-2">
      Ninja: {name}
      <p>Reply: {reply}</p>
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="cursor-pointer"
      >
        {hasComments ? (
          !open ? (
            <p className="text-blue-500">+{hasComments} more replies</p>
          ) : (
            "⬆"
          )
        ) : null}
      </div>
      {open && (
        <div className="pl-2 border-l-2 border-blue-500">{children}</div>
      )}
    </div>
  );
};

export default Comment;
