
// Uncontrolled Components : jo bhi component react state ki help se control nhi hota/karte vo sbhi component uncontrolled component hai
// here we are using useRef and Normal JS method to select elements

import React, { useRef } from 'react'

export default function App() {

  let inputRef = useRef(null)
  let inputRef2 = useRef(null)

  function formSubmit(e) {
    e.preventDefault()
    console.log("input1 : ", inputRef.current.value);
    console.log("input1 : ", inputRef2.current.value);
    // selecting element from dom with normal js method
    let input3 = document.getElementById('in3')
    console.log("input3 : ", input3.value)
  }


  return (
    <div className='container'>
      <h1>Uncontrolled Component</h1>

      <form onSubmit={formSubmit}>
        {/* with useRef hook */}
        <input type="text" ref={inputRef} />
        <br /><br />
        <input type="text" ref={inputRef2} />
        <br /><br />
        {/* with normal js method */}
        <input id='in3' type="text" />
        <br /><br />

        <button>Submit</button>
      </form>
    </div>
  )
}
