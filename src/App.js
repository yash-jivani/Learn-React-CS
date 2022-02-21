import React from 'react'
import ChildComp from './component/ChildComp'

export default function App() {

  const dataFromChild = (data) =>{
    console.log(data.name)
    alert(data.name)
  }

  const nameFromChild = (data2) => {
    console.log(data2)
    alert(data2)
  }

  return (
    <div className='container'>
      <h1>Lifting State Up</h1>
      <h4>(Send Data Child to Parent Component)</h4>
      <ChildComp funcX = {dataFromChild} funcY={nameFromChild}/>
    </div>
  )
}
