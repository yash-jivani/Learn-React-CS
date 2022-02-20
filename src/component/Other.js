import React from 'react'

export default function Other(props) {
  return (
    <div>
        <h3>super child for calling App.js function | Other Comp</h3>
        <button onClick={props.funcY}>Click</button>
    </div>
  )
}
