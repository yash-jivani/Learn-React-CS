
import React from 'react'

function App() {
  return (
    <div className='container'>
      <h1>High Order Component (HOC)</h1>

      {/* Modification of 'Anything' component with the help of HOC component */}

      <HOCred comp={Anything} />
      <HOCgreen comp={Anything} />
      <HOCblue comp={Anything} />
    </div>
  )
}

// HOC component
function HOCred(props) {
  return (

    <div style={{ width: 100, backgroundColor: 'red' }}>
      <props.comp />
    </div>
  )
}
function HOCgreen(props) {
  return (

    <div style={{ width: 150, backgroundColor: 'green' }}>
      <props.comp />
    </div>
  )
}
function HOCblue(props) {
  return (
    <div style={{ width: 200, backgroundColor: 'blue' }}>
      <props.comp />
    </div>
  )
}

// Edit Component
function Anything() {
  return (
    <div>
      <h5>Name</h5>
      <h5>other Info</h5>
    </div>
  )
}

export default App