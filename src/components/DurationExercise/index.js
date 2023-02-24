// https://ucf.zoom.us/rec/share/9mYZbVnsvICa3xE2VGQs42arqmykePPTjEmTesJiVeuoO6z8ZQ96I4I1Ggb6WGk6.NsZyRiKkklKFqbsk

import { React, useState, useCallback, useEffect } from "react";

export default function DurationExercise({ name, returnMenu }) {
  //   const [button, setButton] = useState("Start");
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let timerValue = setInterval(() => {
      if (running) {
        setTimer((timer) => timer + 10);
      } else {
        setTimer(0);
      }
    }, 10);
    return () => clearInterval(timerValue);
  }, [running]);

  let startStop = useCallback(() => {
    setRunning(!running);
  }, [running]);
  let mins = Math.floor((timer / (60 * 1000)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mils = (timer % 1000).toString().padStart(3, "0");
  return (
    <div>
      <p>{name}</p>
      <p>
        Timer: {mins}:{secs}.{mils}
      </p>
      <button onClick={startStop}>{running ? "Reset" : "Start"}</button>
      <button onClick={returnMenu}>Return</button>
    </div>
  );
}
