
/*

===== componentDidMount =====

? jab HTMl comp ready hota hai uske bad componentDidMount call hota hai
? use : with APIs
* HTML comp ready hone ke bad render method more thn 1 time call kar skte hai lekin componentDidMount sirf ek bar hi call hota hai

*/

import React from "react";

export default class App extends React.Component{

  constructor(){
    super()
    this.state={
      name:'yash'
    }
    console.log('constructor called')
  }

  componentDidMount(){
    console.log('componentDid Mount called')
  }

  render(){
    console.log('render called')
    return(
      <div className="container">
        <h2>ComponentDidMount with Class Component</h2>
        <h3>{this.state.name}</h3>
        <button onClick={()=>{this.setState({name:'yash-jivani'})}}>click</button>
      </div>
    )
  }
}

