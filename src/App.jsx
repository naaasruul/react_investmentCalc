import React, { useState } from "react";
import MyInput from "./components/Input";
import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 5900,
    expectedReturn: 1200,
    duration: 5,
  });

  function handleChange(identifier, newValue) {
    setUserInput((prevVal) => {
      return {
        ...prevVal,
        [identifier]: +newValue,
      };
    });
  }

  const inputIsValid = UserInput.duration >= 1;

  return (
    <>
      <Header />

      <MyInput onChange={handleChange} userInput={UserInput} />

      {/* CALCULATOR */}

      {/* TABLE */}
      {inputIsValid ? (
        <Calculator input={UserInput} />
      ) : (
        <p className="center">PLease Enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
