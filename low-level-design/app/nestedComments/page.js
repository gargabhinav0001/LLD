"use client";

import React, { useEffect } from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "John Doe",
    reply: "This is an insightful post!",
    comments: [
      {
        name: "Jane Smith",
        reply: "I completely agree with you!",
        comments: [
          {
            name: "Sam Green",
            reply: "Great points made here!",
            comments: [
              {
                name: "Lisa Blue",
                reply: "I think we should explore this topic further.",
                comments: [
                  {
                    name: "Tom Red",
                    reply: "Agreed, there's so much more to discuss.",
                    comments: [],
                  },
                ],
              },
              {
                name: "Sarah Purple",
                reply: "Yes, and I also believe there's another angle to this.",
                comments: [],
              },
            ],
          },
          {
            name: "Mike White",
            reply: "I think we should also consider other perspectives.",
            comments: [
              {
                name: "Jake Black",
                reply: "Interesting, could you elaborate on that?",
                comments: [],
              },
            ],
          },
        ],
      },
      {
        name: "Emily Yellow",
        reply: "This is a great discussion, love the insights shared here!",
        comments: [
          {
            name: "Liam Blue",
            reply: "Absolutely, such an engaging conversation.",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Mark Taylor",
    reply: "Interesting perspective, I hadn’t thought about it this way.",
    comments: [
      {
        name: "Sally White",
        reply: "I think this is a valid take on the matter.",
        comments: [
          {
            name: "Charlie Brown",
            reply: "I have a different viewpoint, but respect yours.",
            comments: [
              {
                name: "Anna Black",
                reply: "Definitely worth discussing!",
                comments: [
                  {
                    name: "Tom Green",
                    reply: "I'm curious about your view, please share more.",
                    comments: [],
                  },
                ],
              },
            ],
          },
          {
            name: "David Pink",
            reply: "I agree, but there’s more to consider here.",
            comments: [],
          },
        ],
      },
      {
        name: "Tina Orange",
        reply: "I see where you're coming from, but I disagree.",
        comments: [
          {
            name: "Chris Gray",
            reply: "Why do you disagree? Let’s dive into it!",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Alex Green",
    reply: "This is such a controversial topic, but it’s needed.",
    comments: [
      {
        name: "Sophia Black",
        reply: "Indeed, tough conversations are essential.",
        comments: [
          {
            name: "Daniel Red",
            reply: "I agree, but it’s hard to find middle ground.",
            comments: [
              {
                name: "Olivia Pink",
                reply: "It’s true, compromise can be difficult here.",
                comments: [],
              },
            ],
          },
        ],
      },
      {
        name: "Chris White",
        reply: "I’m glad this topic is being brought up.",
        comments: [
          {
            name: "Grace Blue",
            reply: "Same here, these discussions are important.",
            comments: [],
          },
        ],
      },
    ],
  },
];

function nestedComments(data) {
  if (data.length === 0) return;

  return data.map((comment, idx) => {
    const { name, reply, comments } = comment;
    return (
      <Comment
        key={idx}
        name={name}
        reply={reply}
        hasComments={comments.length}
      >
        {nestedComments(comments)}
      </Comment>
    );
  });
}
const NestedComments = () => {
  const renderComments = nestedComments(comments);
  useEffect(() => {
    console.log("element is: ", renderComments);
  }, []);
  return <div className="m-4">{renderComments}</div>;
};

export default NestedComments;
