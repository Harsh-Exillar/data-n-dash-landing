
import React, { useState, useEffect } from "react";

const phrases = [
  "Data Engineering",
  "Data Science",
  "Business Intelligence",
  "Data Analysis",
];

const TypeWriter = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl md:text-5xl font-bold text-white mb-2">
        Data n{" "}
        <span className="inline-block w-[300px] overflow-hidden border-r-4 border-accent animate-typing">
          {phrases[currentPhraseIndex]}
        </span>
      </div>
      <div className="h-0.5 w-32 bg-accent mt-2 animate-fade-in"></div>
    </div>
  );
};

export default TypeWriter;
