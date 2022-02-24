import React from 'react'
import NormalProps from './redux-component/NormalProps'

export default function App() {
  return (
    <div className='container'>

      <NormalProps  data={{name:'yash',age:20}} />

    </div>
  )
}