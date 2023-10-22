import "./App.scss";
import Gameboard from "./components/Gameboard";
import Resets from "./components/Resets";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <h1 className="flex"> Three In A Row </h1>
      <Scoreboard />
      <Gameboard />
      <Resets />
    </div>
  );
}

export default App;
