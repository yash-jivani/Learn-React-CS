import React, { useState } from 'react'

export default function App() {

  // default data ki value null rhegi
  const [data, setdata] = useState(null)
  // default showData ki value false rhegis
  const [showData,setShowdata] = useState(false)
  
  // ager user printData ko call karega to showData ki value true hogi
  const printData = () => {
    setShowdata(true)
  }

  // input field me chnage huye data ki value ko get karne ke liye 
  const getData = (userInput) => {
      console.log(userInput.target.value)
      setdata(userInput.target.value)
  }

  return (
    <div className='container'>
      <h1>-- Get data from input --</h1>
      {/* jab showData ki value true ho tbhi h1 ko print karo */}
      {
        showData?<h3>{data}</h3>:null
      }
      {/* getting input from user */}
      <input type="text" onChange={getData} />

      <button onClick={printData}>show data</button>

    </div>  
  )
}
