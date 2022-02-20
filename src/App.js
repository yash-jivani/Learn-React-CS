import React,{ useState } from 'react'

export default function App() {

  // for multiple button | handling state
  const [mode, setMode] = useState(true)
  // for sinlge button | handling state
  const [toggle, settoggle] = useState(true)


  return (
    <div className='container'>

      {/* ----- WITH MULTIPLE BUTTONS ----- */}
      {/* if mode = true thn show h1 tag else show nthg */}
      {
        mode?<h1>With multiplue buttons</h1>:null
      }
      <button onClick={()=>{setMode(true)}}>Show</button>
      <button onClick={()=>{setMode(false)}}>Hide</button>

      {/* WITH SINGLE BUTTON */}  
      <br />

      {/* ----- WITH SINGLE BUTTON ----- */}
      {
        toggle?<h1>With single button</h1>:null
      }
      <button onClick={()=>{settoggle(!toggle)}}>Toggle</button>

    </div>
  )
}
