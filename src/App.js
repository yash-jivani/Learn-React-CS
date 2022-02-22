
import React, { useRef } from 'react'
import ForwardRefDemo from './component/ForwardRefDemo'

export default function App() {

  // create variable using useRef hook
  let inputRef = useRef(null)

  function handleInput(){
    console.log('function called')
    inputRef.current.style.color = 'red'
    inputRef.current.style.backgroundColor = 'black'
  }

  return (
    <div className='container'>
      <h1>forwardRef</h1>
      <ForwardRefDemo ref={inputRef} />
      <button onClick={handleInput}>click</button>
    </div>
  )
}
