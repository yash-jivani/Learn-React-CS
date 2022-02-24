import React, { useState } from 'react'
import PreviousPropValue from './component/PreviousPropValue'

export default function App() {

  const [count, setCount] = useState(0)
  return (
    <div className='container'>
    <PreviousPropValue count={count} />
    <button onClick={()=>{setCount(Math.floor(Math.random()*10))}}>Update</button>
    </div>
  )
}
