"use client";

import React, { useState } from "react";

const Comment = ({ name, reply, hasComments, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 m-2">
      <div className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-sm shadow-lg px-4 py-2 ">
        Ninja: {name}
        <p>Reply: {reply}</p>
      </div>
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="cursor-pointer"
      >
        {hasComments ? (
          !open ? (
            <>
              ⊕{" "}
              <span className="text-blue-500 text-xs">
                {hasComments} more reply
              </span>
            </>
          ) : (
            "⊖"
          )
        ) : null}
      </div>
      {open && (
        <div className="pl-2 border-l-2 border-gray-200 animate-[pulse_1s]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Comment;
