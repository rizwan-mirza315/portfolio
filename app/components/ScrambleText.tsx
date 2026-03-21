"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export default function ScrambleText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [display, setDisplay] = useState(() => " ".repeat(text.length));

  useEffect(() => {
    let frame = 0;
    const totalFrames = text.length * 4;

    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor(frame / 4)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      frame++;
      if (frame > totalFrames) {
        setDisplay(text);
        clearInterval(id);
      }
    }, 25);

    return () => clearInterval(id);
  }, [text]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
