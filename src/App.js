import React from 'react'
import {Button,Alert} from 'react-bootstrap'

export default function App() {
  return (
    <div className='container'>
    <h1>React-Bootstrap</h1>
    <Button variant="danger">Danger Btn</Button>
    <Alert variant='success'>This is success Alert</Alert>
    </div>
  )
}
