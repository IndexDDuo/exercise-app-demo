import logo from "./logo.svg";
import "./App.css";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import RunningExercise from "./components/RunningExercise";
import { useState } from "react";

function App() {
  const exerciseList = [
    { name: "Push Ups", type: "repetition" },
    { name: "Bicycling", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Running", type: "running" },
    { name: "Sit Ups", type: "repetition" },
  ];
  const [page, setPage] = useState("exercisesPage");
  const [pageName, setPageName] = useState("");

  let defaultReturn = (
    <div className="App">
      <h1>Go Do Something!</h1>
      <p>Select an Exercise:</p>
      <br />

      {exerciseList.map((item) => (
        <div>
          <button
            onClick={() => {
              setPage(item.type);
              setPageName(item.name);
            }}
          >
            {item.name}
          </button>
          <br />
        </div>
      ))}
    </div>
  );

  if (page === "exercisesPage") {
    return defaultReturn;
  } else if (page === "duration") {
    return <DurationExercise name={pageName} />;
  } else if (page === "repetition") {
    return <RepetitionExercise name={pageName} />;
  } else if (page === "running") {
    return <RunningExercise name={pageName} />;
  }
}

export default App;
