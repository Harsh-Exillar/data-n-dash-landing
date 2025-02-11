
import React, { useState, useEffect } from "react";

const phrases = [
  "Data Engineering",
  "Data Science",
  "Business Intelligence",
  "Data Analysis",
];

const TypeWriter = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 2000); // Pause at the end
        }
      }, 150); // Slower typing speed

      return () => clearInterval(typingInterval);
    } else {
      const erasingInterval = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          setIsTyping(true);
          clearInterval(erasingInterval);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 75); // Faster erasing speed

      return () => clearInterval(erasingInterval);
    }
  }, [currentPhraseIndex, isTyping]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-6xl font-bold text-white flex flex-wrap justify-center items-baseline gap-x-4">
        <span>Data n</span>
        <span className="relative inline-block min-w-[200px]">
          <span className="inline-block">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300"></span>
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
