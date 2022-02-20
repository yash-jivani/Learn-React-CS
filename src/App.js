import React from 'react'
import FuncAsProps from './component/FuncAsProps'

const parentFunc = () => {
  alert('Parent Function')
  console.log('Function from parent (App.js)')
}

export default function App() {
  return (
    <div className='container'>
      <FuncAsProps funcX = {parentFunc} />
    </div>
  )
}
