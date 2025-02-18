"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loader from "./loader";

function Gallery() {
  const [imgData, setImgData] = useState([]);
  const galleryRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setImgData((prev) => [...prev, ...res]);
      });
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    galleryRef.current.addEventListener(
      "scroll",
      (e) => {
        if (
          e.target.offsetHeight + e.target.scrollTop ===
          e.target.scrollHeight
        ) {
          getData();
        }
      },
      []
    );

    return () => {
      galleryRef.current.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      {" "}
      <div
        className="flex gap-2 flex-col p-4"
        id="gallery"
        ref={galleryRef}
        style={{ overflowY: "auto", maxHeight: "500px" }}
      >
        {imgData.length ? (
          <>
            {imgData.map((data, idx) => {
              return (
                <div
                  className="border-2 p-2 rounded-md justify-center items-center"
                  key={idx}
                >
                  <h3>{data.username}</h3>
                  <Image
                    src={"https://picsum.photos/seed/picsum/200/300"}
                    alt={data.name}
                    width={100}
                    height={100}
                  ></Image>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
        {isLoading && <Loader />}
      </div>
    </>
  );
}

export default Gallery;
