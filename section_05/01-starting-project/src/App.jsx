import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

const INITIAL_VALUES = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES)

	function onChange(inputId, newValue) {
		setUserInput(current => ({ ...current, [inputId]: +newValue }))
	}

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={onChange}/>
      <Results userInput={userInput}/>
    </>
  )
}

export default App
