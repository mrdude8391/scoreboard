import { useState } from "react";
import "./index.css";
import FullscreenButton from "./components/FullscreenButton";

function App() {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);

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
    const swap = redScore;
    setRedScore(blueScore);
    setBlueScore(swap);
  };

  return (
    <>
      <main>
        <div className="scoreboard">
          <div className="red score">
            <button onClick={() => increaseScore(redScore, setRedScore)}>
              {redScore}
            </button>
            <button
              onClick={() => decreaseScore(redScore, setRedScore)}
            ></button>
          </div>
          <div className="blue score">
            <button onClick={() => increaseScore(blueScore, setBlueScore)}>
              {blueScore}
            </button>
            <button
              onClick={() => decreaseScore(blueScore, setBlueScore)}
            ></button>
          </div>
        </div>
      </main>
      <footer>
        <FullscreenButton></FullscreenButton>
        <button onClick={handleSwap}>Swap</button>
        <button onClick={resetScores}>Reset</button>
      </footer>
    </>
  );
}

export default App;
