import { useState, useEffect } from "react";

const useAnimatedString = (stringToAnimate: string, speed:number = 100) => {
  const [animatedString, setAnimatedString] = useState("");

  useEffect(() => {
    let timer:number;

    if (animatedString.length < stringToAnimate.length) {
      timer = setTimeout(() => {
        setAnimatedString(prev => prev + stringToAnimate[animatedString.length]);
      }, speed);
    }

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, [animatedString, stringToAnimate, speed]);

  return animatedString;
}

export default useAnimatedString