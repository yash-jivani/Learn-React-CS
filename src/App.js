/*

useEffect :  componentDidMount, componentDidUpdate, and componentWillUnmount combined.
useEffect parameter me ek function leta hai
*/

import React,{ useState,useEffect } from 'react'

export default function App() {
  const [count, setcount] = useState(0)
  useEffect( ()=>{
    console.log('useEffect called')
  } )
  return (

    <div className='container'>

      <h1>useEffect-1</h1>
      <h3>{count}</h3>
      <button onClick={()=>{setcount(count+1)}}>click</button>

    </div>
  )
}
