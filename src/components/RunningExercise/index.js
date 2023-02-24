import { React, useState, useCallback, useEffect } from "react";

export default function RunningExercise({ name, returnMenu }) {
  //   let lapArr = [];
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [lap, setLap] = useState([]);

  let mins = Math.floor((timer / (60 * 1000)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mils = (timer % 1000).toString().padStart(3, "0");

  useEffect(() => {
    let timerValue = setInterval(() => {
      if (running) {
        setTimer((timer) => timer + 10);
      } else {
        setTimer(0);
        setLap([]);
      }
    }, 10);
    return () => clearInterval(timerValue);
  }, [running]);

  let startStop = useCallback(() => {
    setRunning(!running);
  }, [running]);

  const record = useCallback(() => {
    if (running) {
      setLap([...lap, `${mins}:${secs}.${mils}`]);
    }
    // setting timer to 0 for every time the button is clicked.
    setTimer(0);
  }, [mins, secs, mils]);

  return (
    <div>
      <p>{name}</p>
      <p>
        Timer: {mins}:{secs}.{mils}
      </p>
      <button onClick={startStop}>{running ? "Reset" : "Start"}</button>
      <button onClick={record}>Record Lap</button>
      <button onClick={returnMenu}>Return</button>
      <div>
        <ul>
          {lap.map((time, index) => (
            <li>
              Lap {index + 1}: {time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
