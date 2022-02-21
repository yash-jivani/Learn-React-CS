import React from 'react'
import Users from './component/Users'

export default function App() {

  const users = [
    { name: 'yash', number: 999 },
    { name: 'xyz', number: 888 },
    { name: 'anish', number: 777 },
  ]
  return (
    <div className='container'>
      <h1>Reuse Component in loop</h1>
      {
        users.map((user,i)=>
        <Users key={i} data={user}/>
        )
      }
    </div>
  )
}
