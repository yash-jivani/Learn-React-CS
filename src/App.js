/*

Ref : (dom manipulation) | try to avoid
class based.

*/

import React, { Component, createRef } from 'react'

export default class App extends Component {

  constructor() {
    super();
    this.inputRef = createRef();  // build-in function
  }

  getValue() {
    console.log(this.inputRef)
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color = 'red';
    this.inputRef.current.style.backgroundColor = 'yellow';
  }


  render() {
    return (
      <div className='container'>

        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => { this.getValue() }} >click</button>

      </div>
    )
  }
}
