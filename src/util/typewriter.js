import React, { useEffect, useState } from "react";

const TypeWriter = (props) => {
  const { text, speed, delay } = props;

  const [displayText, setDisplayText] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRunning(true);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (isRunning) {
      if (displayText !== text) {
        setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, speed);
      }
    }
  }, [text, displayText, speed, isRunning]);

  return <div>{displayText}</div>;
};

export default TypeWriter;
