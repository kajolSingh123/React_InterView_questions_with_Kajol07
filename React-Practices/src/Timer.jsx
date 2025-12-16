import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [isRunning]);

  const handleStartTimer = () => setIsRunning(true);
  const handleStopTimer = () => setIsRunning(false);
  const handlReSetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };
  return (
    <>
      <h1>Timer : {time}</h1>
      <button onClick={handleStartTimer}>Start</button>
      <button onClick={handleStopTimer}>Stop</button>
      <button onClick={handlReSetTimer}>ReSet</button>
    </>
  );
}
export default Timer;
