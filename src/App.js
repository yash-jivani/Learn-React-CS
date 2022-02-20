
/*

===== componentWillUnmount =====

* jab koi component delete/hide/remove hota hai tbhi componentWillUnmount calll hota hai

*/

import React, { Component } from 'react'
import UnmountEx from './component/UnmountEx';

export default class App extends Component {

  constructor() {
    super();
    this.state={
      show:true
    }

    console.log('constructor');
  }

  render() {
    console.log('render')
    return (
      <div className='container'>

        <h2>componentWillUnmount with class Component</h2>
        {
          this.state.show?<UnmountEx />:""
        }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
      </div>
    )
  }
}
