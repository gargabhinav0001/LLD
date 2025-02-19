import React from "react";

const AccordionItem = ({ title, body, isOpen, setOpenId }) => {
  const arrow = isOpen ? "↑" : "↓";

  return (
    <div className="border-2 border-purple-400">
      <div
        onClick={() => {
          if (isOpen) {
            setOpenId(null);
          } else setOpenId(title);
        }}
        className="bg-slate-300 cursor-pointer font-bold p-1 flex justify-between"
      >
        <p>{title}</p> <span>{arrow}</span>
      </div>
      {isOpen && <div className="bg-slate-400 p-2">{body}</div>}
    </div>
  );
};

export default AccordionItem;
