import React, { useState } from 'react'
import Student from './component/Student'

export default function App() {
  const [name1, setName1] = useState("init name")
  return (
    <div className='container'>
      <h1>Props in React</h1>

      {/* props ko smjne ke liye hum parameter smj skte hai */}

      <Student name="yash" mail = "yash@gmail.com" number= "8656"/>
      {/* <Student name="jaymin" mail = "jaymin@gmail.com" number= "65165"/>
      <Student name="jay" mail = "jay@gmail.com" number= "7856"/> */}

      <Student name={name1}/>
      <button onClick={()=>{
        setName1('Edited Name')
      }}>click here</button>

    </div>  
  )
}
