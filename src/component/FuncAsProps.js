// parent ke function ko children me use karne ke liye

import React from 'react'
import Other from './Other'

export default function FuncAsProps(props) {
  return (
    <div>
        <h1>FuncAsProps | use parent's function</h1>
        {/* calling function... */}
        <button onClick={props.funcX}>Click</button>

        {/* passing parent's props as a prop of Other component */}
        <Other funcY = {props.funcX}/>
    </div>

  )
}
