
import React, { useState, useEffect } from "react";

const phrases = [
  "Data Engineering",
  "Data Science",
  "Business Intelligence",
  "Data Analysis",
];

const TypeWriter = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

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
      <h1 className="text-4xl md:text-6xl font-bold text-white flex flex-wrap justify-center items-baseline gap-x-4">
        <span>Data n</span>
        <span className="relative">
          <span className="inline-block overflow-hidden">
            {phrases[currentPhraseIndex]}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform origin-left transition-transform duration-300"></span>
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
