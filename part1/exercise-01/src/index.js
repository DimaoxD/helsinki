import React from 'react'
import {createRoot} from 'react-dom/client'
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
  <p> Parte: {props.part}, numero de ejercicios: {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
<p>Total de ejercicios: {props.exercise}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course}/>
        <p><Content part={part1} exercise={exercises1}/></p>
        <p><Content part={part2} exercise={exercises2}/></p>
        <p><Content part={part3} exercise={exercises3}/></p>
        <Total exercise={exercises1+exercises2+exercises3}/>
    </div>
  )
}
//renderDom esta depreciado, se utiliza createRoot desde la version 18
createRoot(document.getElementById('root')).render(<App/>)