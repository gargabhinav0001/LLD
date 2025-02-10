"use client";

import { useEffect, useState } from "react";
import MemeTemplate from "./memeTemplate";
import MemesShimmer from "./memesShimmer";

function Memes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    const data = await fetch("https://meme-api.com/gimme/20")
      .then((data) => data.json())
      .then((data) => {
        setMemes(data.memes);
      })
      .catch((err) => console.error("Error in fetching memes.." + err));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {memes.length > 0 ? (
        memes.map((meme, idx) => <MemeTemplate data={meme} key={idx} />)
      ) : (
        <MemesShimmer />
      )}
    </div>
  );
}

export default Memes;
