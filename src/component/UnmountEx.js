import React, { Component } from 'react'

export default class UnmountEx extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount called')
        // alert('componentWillUnmount called')
    }
  render() {
    return (
      <div>
          <h2>Child Component(UnmountEx)</h2>
      </div>
    )
  }
}
