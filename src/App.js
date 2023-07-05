import { useState } from "react";
import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [value, setValue] = useState(0);

  const decreaseOne = () => {
    const newValue = value - 1;
    setValue(newValue);
  };

  const increaseOne = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  const resetToZero = () => {
    setValue(0);
  };

  return (
    <div className="counter">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <IncreaseButton increase={increaseOne} />
      <DecreaseButton decrease={decreaseOne} />
      <ResetButton reset={resetToZero} />
    </div>
  );
};

export default App;
