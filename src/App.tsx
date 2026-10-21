import { useState } from "react";
import "./index.css";
import FullscreenButton from "./components/FullscreenButton";

function App() {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [redName, setRedName] = useState("");
  const [blueName, setBlueName] = useState("");

  const increaseScore = (
    score: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    setter(score + 1);
  };

  const decreaseScore = (
    score: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (score === 0) return;
    setter(score - 1);
  };

  const resetScores = () => {
    setRedScore(0);
    setBlueScore(0);
  };

  const handleSwap = () => {
    const swapScore = redScore;
    const swapName = redName;
    setRedScore(blueScore);
    setBlueScore(swapScore);
    setRedName(blueName);
    setBlueName(swapName);
  };

  return (
    <>
      <main>
        <div className="scoreboard">
          <div className="red score">
            <button onClick={() => increaseScore(redScore, setRedScore)}>
              <p>
                {redScore}
                <label>{redName}</label>
              </p>
            </button>
            <button
              className="minus"
              onClick={() => decreaseScore(redScore, setRedScore)}
            ></button>
          </div>
          <div className="blue score">
            <button onClick={() => increaseScore(blueScore, setBlueScore)}>
              <p>
                {blueScore}
                <label>{blueName}</label>
              </p>
            </button>
            <button
              className="minus"
              onClick={() => decreaseScore(blueScore, setBlueScore)}
            ></button>
          </div>
        </div>
      </main>
      <footer>
        <div className="controls">
          <FullscreenButton></FullscreenButton>
          <button onClick={handleSwap}>Swap</button>
          <button onClick={resetScores}>Reset</button>
        </div>
        <div className="teams">
          <input
            placeholder="Red Team Name:"
            onChange={(e) => {
              setRedName(e.target.value);
            }}
          ></input>
          <input
            placeholder="Blue Team Name:"
            onChange={(e) => {
              setBlueName(e.target.value);
            }}
          ></input>
        </div>
      </footer>
    </>
  );
}

export default App;
