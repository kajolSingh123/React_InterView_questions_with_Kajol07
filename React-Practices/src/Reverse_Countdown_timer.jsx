import { useState, useEffect } from "react";

const Reverse_Countdown_timer = () => {
  const [timer, setTimer] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (timer === 0) {
      setIsRunning(false);
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [isRunning, timer]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReSet = () => {
    setIsRunning(false);
    setTimer(10);
  };
  return (
    <>
      <h1>Reverse_Countdown_Timer : {timer} </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReSet}>ReSet</button>
    </>
  );
};

export default Reverse_Countdown_timer;
