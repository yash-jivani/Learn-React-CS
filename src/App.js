import React, { useState } from 'react'

export default function App() {

  const [data, setData] = useState('yash')

  /*
  default data => yash 
  ager data ko update karna ho to setData se hoga
  */

  const updateData = () => {
    setData('jivani yash')
  }

  return (
    <div className='container'>
      <h1>{data}</h1>
      <button onClick={updateData}>Click</button>
    </div>
  )
}
