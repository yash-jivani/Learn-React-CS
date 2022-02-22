/*

components ko pages me convert karnge >> unn components per link add karenge (for new page)
terminal cmnd : 'npm install react-router-dom' 

*/

import React from 'react'
import { BrowserRouter as Router , Link , Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <div className='container'>

      <Router>

        <Link to='/home'>Home page</Link> | | 
        <Link to='/about'> About page</Link>

{/* sabhi route Rountes ke ander hi aayenge | sytx */}
    <Routes>
        <Route path='/' element={<Demo />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About />}></Route>
    </Routes>

      </Router>

    </div>
  )
}

function Demo(){
  return(
    <>
    <h2>Router Setup</h2>
    </>
  )
}

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p>Lorem ipsum HOME sit amet.</p>
    </>
  )
}

function About() {
  return (
    <>
      <h1>About page</h1>
      <p>Lorem ipsum ABOUT sit amet.</p>
    </>
  )
}