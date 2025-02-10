
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

    // Typing effect
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          // Wait before starting to erase
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      // Erasing effect
      const erasingInterval = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          setIsTyping(true);
          clearInterval(erasingInterval);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 50);

      return () => clearInterval(erasingInterval);
    }
  }, [currentPhraseIndex, isTyping]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white flex flex-wrap justify-center items-baseline gap-x-4">
        <span>Data n</span>
        <span className="relative">
          <span className="inline-block overflow-hidden">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform origin-left transition-transform duration-300"></span>
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
