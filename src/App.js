
// Controlled Components : jis component me input fields hoti hai aur hum uss filed ko react state ki help se handle karte hai

import React, { useState } from 'react'

export default function App() {
  const [first, setfirst] = useState('')
  return (
    <div className='container'>
      <h1 >Controlled Component</h1>
      <input type="text" value={first} onChange={(e) => { setfirst(e.target.value) }} />
      <h4>value : {first}</h4>
    </div>
  )
}
