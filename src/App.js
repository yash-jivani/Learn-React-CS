import React, { useState } from 'react'

export default function App() {

  const [value, setValue] = useState(null)

  function updateValue() {
    let val = Math.floor(Math.random() * 10);
    // setValue callback function leta hai 
    setValue((lastVal) => {
      console.log(lastVal)   // previous (last) value console per print hogi
      return setValue(val)    // setValue 
    })
  }

  return (
    <div className='container'>
      <h1>Previous Value</h1>
      <p>current value : {value}</p>
      <button onClick={updateValue}>Update</button>
    </div>
  )
}
