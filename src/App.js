
/*

===== shouldComponentUpdate =====

* component ke update ko control karta hai
shouldComponentUpdate ki default value false hoti hai
* ager shouldComponentUpdate ki value hogi to render method call nhi hoti
(ager shouldCompUpdate ki value false hogi to component dusri bar render nhi hoga)

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

  shouldComponentUpdate(){
    console.log("shouldCompUpdate called",this.state.count)
    // return true;
    return false;
  }

  render() {
    console.log('render')
    return (
      <div className='container'>

        <h2>shouldComponentUpdate with class Component</h2>
        <h3>{this.state.count}</h3>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>click</button>

      </div>
    )
  }
}
