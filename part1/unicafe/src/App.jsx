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
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

  const handleGoodClick = () => {
    let counter = good + 1
    sumAllFeedback()
    setGood(counter)
    calcAverage()
  }

  const handleNeutralClick = () => {
    let counter = neutral + 1
    sumAllFeedback()
    setNeutral(counter)
    calcAverage()
  }

  const handleBadClick = () => {
    let counter = bad + 1
    sumAllFeedback()
    setBad(counter)
    calcAverage()
  }

  const sumAllFeedback = () => {
    let sum = all + 1
    setAll(sum)
  }

  const calcAverage = () => {
    let countGood = good * 1
    let countBad = bad * (-1)
    let countAvg = (countGood + countBad) / all
    let positivePercCounter = (good / all) * 100
    setAvg(countAvg)
    setPos(positivePercCounter)
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
      <Stat counter={all} name='all'/>
      <Stat counter={avg} name='average'/>
      <Stat counter={`${pos} %`} name='positive'/>
    </div>
  )
}

export default App