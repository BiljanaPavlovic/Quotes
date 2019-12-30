import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';


const Quote = ({text,points}) => {
    return (
        <>
    <p>{text}</p>
    <p>has {points}</p>

</>
    )
}

const App = ({quotes}) => {
    const [index,setIndex] = useState(0)  
    const [points,setPoints] = useState(new Array(quotes.length).fill(0))
  return (
<>
<br/><br/>
<b><Quote text={quotes[index]} points={points[index]} /></b>


<button className='dugme' onClick={() => setIndex(Math.floor(Math.random()* quotes.length))}>Rand</button>
<button className='dugme' onClick={() =>{ let x = [...points]; x[index]++; setPoints(x); } }>Vote</button>
<br/><br/><br/>
  </>
  )}

const quotes = [
    'Talk is cheap. Show me the code.',
    'Programs must be written for people to read, and only incidentally for machines to execute.',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Give a man a program, frustrate him for a day.',
    'Teach a man to program, frustrate him for a lifetime.',
    'The most disastrous thing that you can ever learn is your first programming language.',
    'The most important property of a program is whether it accomplishes the intention of its user.',
    'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.',
    'Happiness should be a function without any parameters',
    'User interface is the process of shifting from chaotic complexity to elegant simplicity.'
]



ReactDOM.render(
  <App quotes={quotes} />,
  document.getElementById('root')
)
