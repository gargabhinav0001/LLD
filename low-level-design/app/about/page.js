"use client";

import { useState } from "react";
import Content from "./content";

function AboutUs() {
  const [selectLang, setSelectLang] = useState("en");
  return (
    <>
      <select onChange={(e) => setSelectLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hn">Hindi</option>
        <option value="sp">Spanish</option>
      </select>
      <Content lang={selectLang} />
    </>
  );
}

export default AboutUs;
