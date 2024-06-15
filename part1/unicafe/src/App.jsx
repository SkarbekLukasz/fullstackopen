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

const Stat = ({name, counter}) => {
  return (
    <p>{name} {counter}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const pos = good / all

  if(all === 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <Stat counter={good} name='good'/>
      <Stat counter={neutral} name='neutral'/>
      <Stat counter={bad} name='bad'/>
      <Stat counter={all} name='all'/>
      <Stat counter={avg} name='average'/>
      <Stat counter={`${pos} %`} name='positive'/>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App