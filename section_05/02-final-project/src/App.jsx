import { useState } from "react"
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = Object.values(userInput).every(value => value >= 0);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleChange={handleChange}
      />
      {inputIsValid ?
        <Results userInput={userInput} /> :
        <p className="center">Please enter valid input values (non-negative numbers).</p>}
    </>
  )
}

export default App
