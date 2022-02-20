
/*

===== componentDidUpdate =====

*jab props OR state update(change) hoti hai tbhi componentDidUpdate call hota hai
 
*/

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    console.log('constructor');
  }

  componentDidUpdate(lastProp, lastState) {
    console.log('componentDidUpdate')
    console.log(`currentState = ${this.state.count} lastState = ${lastState.count}`)
  }

  render() {
    console.log('render')
    return (
      <div className='container'>

        <h2>componentDidUpdate with class Component</h2>
        <h3>{this.state.count}</h3>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>click</button>

      </div>
    )
  }
}
