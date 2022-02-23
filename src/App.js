import React, { useState } from 'react'

// data ko server me create/add karne ke liye post method ka use hota hai 

export default function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const saveToApi = () => {
    // console.log(name,email,number)
    let data = { name, email, number }
    // console.log(data)
    const URL = `http://localhost:5000/users`;

    // * sytx : for adding json data to server
    fetch(URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
  }

  return (
    <div className='container'>

      <h1>Post API Example</h1>

      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" /> <br /> <br />
      <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" /> <br /> <br />
      <input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} placeholder="Number" /> <br /> <br />
      <button onClick={saveToApi}>Save to API</button>
    </div>
  )
}
