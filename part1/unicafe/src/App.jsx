import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const Feedback = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Stat = (props) => {
  return (
    <p>{props.name} {props.counter}</p>
  )
}

const Statistics = () => {
  return (
    <h1>statistics</h1>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    let counter = good + 1
    setGood(counter)
  }

  const handleNeutralClick = () => {
    let counter = neutral + 1
    setNeutral(counter)
  }

  const handleBadClick = () => {
    let counter = bad + 1
    setBad(counter)
  }

  return (
    <div>
      <Feedback />
      <Button name='good' handleClick={handleGoodClick}/>
      <Button name='neutral' handleClick={handleNeutralClick}/>
      <Button name='bad' handleClick={handleBadClick}/>
      <Statistics />
      <Stat counter={good} name='good'/>
      <Stat counter={neutral} name='neutral'/>
      <Stat counter={bad} name='bad'/>
    </div>
  )
}

export default App