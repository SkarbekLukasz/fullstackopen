import { useState } from 'react'

const Button = ({handleClick, name}) => (<button onClick={handleClick}>{name}</button>)

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const pos = (good / all) * 100

  if(all === 0) {
    return(
        <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine value={good} text='good'/>
          <StatisticLine value={neutral} text='neutral'/>
          <StatisticLine value={bad} text='bad'/>
          <StatisticLine value={all} text='all'/>
          <StatisticLine value={avg.toFixed(1)} text='average'/>
          <StatisticLine value={`${pos.toFixed(1)} %`} text='positive'/>
        </tbody>
      </table>
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
      <h1>give feedback</h1>
      <Button name='good' handleClick={handleGoodClick}/>
      <Button name='neutral' handleClick={handleNeutralClick}/>
      <Button name='bad' handleClick={handleBadClick}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App