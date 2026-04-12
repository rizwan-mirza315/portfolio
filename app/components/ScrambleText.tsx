"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export default function ScrambleText({
  text,
  className,
  style,
  charStyles,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  charStyles?: Record<number, React.CSSProperties>;
}) {
  const [display, setDisplay] = useState(text);

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

  if (!charStyles) {
    return (
      <span className={className} style={style}>
        {display}
      </span>
    );
  }

  return (
    <span className={className} style={style}>
      {display.split("").map((char, i) => (
        <span key={i} style={charStyles[i]}>
          {char}
        </span>
      ))}
    </span>
  );
}
