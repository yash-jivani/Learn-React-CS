/*

useRef : (dom manipulation) 
function based.

*/

import React, { useRef } from 'react'

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
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>click</button>
    </div>
  )
}
