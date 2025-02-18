import React from "react";
import { TRANSLATE } from "@/utils/translate";

const Content = ({ lang }) => {
  const data = TRANSLATE[lang];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
        <p className="text-gray-600 text-lg">{data.paragraph1}</p>
        <p className="text-gray-600 text-lg mt-4">{data.paragraph2f}</p>
      </div>
    </div>
  );
};

export default Content;
