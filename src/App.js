
/*

3 ways to add css :
1) with normal css file 
2) with inline css
3) with modular css file

*/

import React from 'react'
import "./style.css"  
import style from "./custom.module.css"

export default function App() {
  return (
    <div className='container'>

      {/* 1. with normal css file */}
      <h1 className='heading1'>With Style.css</h1>

      {/* 2. with inline css */}
      <h1 style={{background:"green",color:'white'}}>With inline css</h1>

      {/* 3. with modular file | sytx : {style.className} */}
      <h1 className={style.edit}>With modular file</h1>

    </div>
  )
}
