/*

useEffect with conditions (call useEffect for specific data/state)

*/

import React, { useState } from 'react'
import EffectWithProp from './component/EffectWithProp'

export default function App() {

  const [one, setone] = useState(1)
  const [two, settwo] = useState(10)

  return (
    <div className='container'>

    <EffectWithProp one={one} two={two}/>
    <button onClick={() => { setone(one + 1) }}>One</button>
    <button onClick={() => { settwo(two + 1) }}>Two</button>

    </div>
  )
}

