import React, { useState } from 'react'

export default function App() {
  const [data, setData] = useState({name:'yash',age:20})
  return (
    <div className='container'>

      <h1>State with object</h1>

{/*  
// problm : ager name ko set karnge to age remove ho jayegi | ager age ko set karenge to name remove ho jayega
      <input type="text" placeholder='Name' value={data.name} onChange={((e)=>{setData({name:e.target.value})})} />
      <input type="text" placeholder='Age' value={data.age} onChange={((e)=>{setData({age:e.target.value})})} />
      <p>Name : {data.name}</p>
      <p>Age : {data.age}</p>
*/}
      {/* solution : use spread operator */}
      <input type="text" placeholder='Name' value={data.name} onChange={((e)=>{setData({...data,name:e.target.value})})} />
      <input type="text" placeholder='Age' value={data.age} onChange={((e)=>{setData({...data,age:e.target.value})})} />
      <p>Name : {data.name}</p>
      <p>Age : {data.age}</p>

    </div>
  )
}
