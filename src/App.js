/*

useEffect with conditions (call useEffect for specific data/state)

*/

import React, { useState, useEffect } from 'react'

export default function App() {

  const [one, setone] = useState(1)
  const [two, settwo] = useState(10)

  // ? called for both (when state chnage)
  useEffect(() => {
    console.log('useEffect called UNI');
  })  // with no conditions

  // ? jab one ki state chng hogi sirf tab call hoga
  useEffect(() => {
    console.log('ONE')
  }, [one])  // with condition

  // ? jab two ki state chng hogi sirf tab call hoga
  useEffect(() => {
    console.log('TWO')
  }, [two])  // with conditions

  return (
    <div className='container'>

      <h1>useEffect with conditions</h1>
      <h3>{one}</h3>
      <h3>{two}</h3>

      <button onClick={() => { setone(one + 1) }}>One</button>
      <button onClick={() => { settwo(two + 1) }}>Two</button>

    </div>
  )
}

