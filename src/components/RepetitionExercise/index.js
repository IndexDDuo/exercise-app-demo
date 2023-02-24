import { React, useState } from "react";

export default function RepetitionExercise({ name, returnMenu }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{name}</p>
      <p>reps: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Complete Rep
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={returnMenu}>Return</button>
    </div>
  );
}
