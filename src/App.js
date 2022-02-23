
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home,{Demo} from './component/Home'
import Nav from './Nav'
import About from './component/About'

export default function App() {
  return (
    <div className='container'>

    <Nav/>

{/* sabhi route Rountes ke ander hi aayenge | sytx */}
    <Routes>
        <Route path='/' element={<Demo />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About />}></Route>
    </Routes>

    </div>
  )
}




