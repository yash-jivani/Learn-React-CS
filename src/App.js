import React,{ useState } from 'react'

export default function App() {

  const [name, setname] = useState(null)
  const [option, setOption] = useState(null)
  const [val, setval] = useState(null)

  const getData = (e) => {
    e.preventDefault()  // auto reload stop
    console.log(name,option,val) // print value in console
  }

  return (
    
    <div className='container'>

      <h1>Handle form in React</h1>
      <form onSubmit={getData}>
        <input type="text" placeholder='Enter your name' onChange={(e)=>{setname(e.target.value)}} /> <br /><br />
        <select onChange={(e)=>{setOption(e.target.value)}}>
          <option>hello</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=>{setval(e.target.checked)}} /> <span>Agree terms and condition</span><br /><br />
        <button type="submit">submit</button>

      </form>

    </div>
  )
}
