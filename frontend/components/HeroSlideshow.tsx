"use client";

import { useEffect, useState } from "react";

const SLIDE_INTERVAL = 6000;

/** ヒーロー背景のスライドショー。写真の上に白のオーバーレイ(#FFFFFF80)を重ねる */
export default function HeroSlideshow({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="hero-bg" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={`hero-bg-slide${i === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}
