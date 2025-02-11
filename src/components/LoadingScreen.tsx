
import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary">
      <div className="w-64 h-64 relative mb-8">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQFSxdzdS2j4Gw/company-logo_100_100/B4DZTzlriQHYAQ-/0/1739253529200/data_n_dash_logo?e=1747267200&v=beta&t=WWOtrHesO5xpFNAVyFwRS5DbqlHHH9vi0nYN0-1_zKQ"
          alt="Data n Dash"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="w-64 bg-white/10 rounded-full h-2 mb-4">
        <div
          className="bg-accent h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-white text-lg font-medium">
        Building Dashboard Community... {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;
