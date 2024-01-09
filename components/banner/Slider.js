"use client";
import { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import styles from "./Banner.module.css";

function Slider() {
  const sliderRef = useRef(null);
  let checking = 0
  useEffect(() => {
    const unsub = setInterval(() => {
      const elm = document.getElementById("slider");
      const checkWidth = document.getElementById("bannerWrapper").clientWidth;
      if (elm) {
        if ((checking) >= elm.scrollWidth-100) {
          elm.scrollLeft -= elm.scrollWidth;
          checking = 0
        } else {
          console.log(elm.scrollWidth , checkWidth/2)
          elm.scrollLeft += checkWidth;
          console.log(elm.scrollLeft)
          checking += checkWidth
        }
      }
    }, 2500);

    return () => clearInterval(unsub);
  }, []);

  const data = [
    {
      id: 1,
      subtitle: "Trending item",
      banner: "/assets/img/banner-1.jpg",
      title: "Women's latest fashion sale",
      startingAt: [20, ".00"],
    },
    {
      id: 2,
      subtitle: "Trending Accessories",
      banner: "/assets/img/banner-2.jpg",
      title: "Modern sunglasses",
      startingAt: [15, ".00"],
    },
    {
      id: 3,
      subtitle: "Sale Offer",
      banner: "/assets/img/banner-3.jpg",
      title: "New fashion summer sale",
      startingAt: [29, ".99"],
    },
  ];
  return (
    <div className={styles.slider} id="slider" ref={sliderRef}>
      {data?.map((d) => (
        <Banner bData={d} key={d.id} />
      ))}
    </div>
  );
}

export default Slider;
