import React, { PureComponent } from 'react'

export default class ChildPureComp extends PureComponent {

  render() {
      console.log('Child Pure Component Rerender!');
    return (
      <>
        <h3>With Props</h3>
        <h4>{this.props.count2}</h4>
      </>
    )
  }
}
