"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const arr = [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://fastly.picsum.photos/id/181/200/300.jpg?hmac=3b280Ezwkze55gQeG0IWLTJ9e_Pawe5ZL4mhe-LO_WE",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://fastly.picsum.photos/id/181/200/300.jpg?hmac=3b280Ezwkze55gQeG0IWLTJ9e_Pawe5ZL4mhe-LO_WE",
  ];
  const [imgIdx, setImgIdx] = useState(0);

  const onLeftSlide = () => {
    setImgIdx((prev) => (prev == 0 ? arr.length - 1 : prev - 1));
  };

  const onRightSlide = () => {
    setImgIdx((prev) => Math.abs(prev + 1) % arr.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      onRightSlide();
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="flex justify-center">
      <h1>{imgIdx}</h1>
      <button onClick={onLeftSlide}>left</button>
      <div
        className="bg-purple-300 h-96 w-96 bg-cover bg-center -skew-y-12"
        style={{ backgroundImage: `url(${arr[0]})` }}
      ></div>
      <div
        className="bg-purple-300 h-96 w-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${arr[1]})` }}
      ></div>
      <div
        className="bg-purple-300 h-96 w-96 bg-cover bg-center -skew-y-12"
        style={{ backgroundImage: `url(${arr[2]})` }}
      ></div>
      <button onClick={onRightSlide}>right</button>
    </div>
  );
};

export default ImageSlider;
