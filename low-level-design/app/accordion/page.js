"use client";

import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "title 1",
    body: " this is body 1",
  },
  {
    title: "title 2",
    body: " this is body 2",
  },
  {
    title: "title 3",
    body: " this is body 3",
  },
];

function Accordion() {
  const [openId, setOpenId] = useState(data[0].title);
  return (
    <div className="flex gap-1 flex-col">
      {data.map((accordion) => (
        <AccordionItem
          key={accordion.title}
          title={accordion.title}
          body={accordion.body}
          isOpen={openId === accordion.title}
          setOpenId={setOpenId}
        />
      ))}
    </div>
  );
}

export default Accordion;
