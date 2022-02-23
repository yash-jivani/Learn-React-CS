 
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home,{Demo} from './component/Home'
import Nav from './Nav'
import About from './component/About'

export default function App() {
  // console.log(pageNotFound404)
  return (
    <div className='container'>

    <Nav/>

{/* sabhi route Rountes ke ander hi aayenge | sytx */}
    <Routes>
        <Route path='/' element={<Demo />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About />}></Route>
        
        {/* '*' => ager kisi bhi route se match nhi karega to * me jayega */}
        <Route path='*' element={<PageNotFound404/>}></Route>
    </Routes>

    </div>
  )
}

// ! Note: function name == PascalCase 
  
function PageNotFound404(){
  return (
    <>
      <h1>Page not found!</h1>
      <p>Lorem ipsum NOT FOUND sit amet.</p>
    </>
  )
}



