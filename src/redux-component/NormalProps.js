import React from 'react'

export default function NormalProps(props) {
    console.log(props)
    console.log(props.data)
  return (
    <div>
        <h3>Normal Props</h3>
        <h4>{props.data.name}</h4>
        <h4>{props.data.age}</h4>
    </div>
  )
}
