
import React, { PureComponent } from 'react'
import ChildPureComp from './component/ChildPureComp';

export default class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      count:1,
      count2:2,
    }
  }
  render() {
    console.log('Rerender!');
    return (
      <div className='container'>
        <h1>Pure Component</h1>
        <h3>With state</h3>
        <h4>{this.state.count}</h4>

{/* updating count value => Rerender */}
        <button onClick={()=>this.setState({count:this.state.count+1})}>diffCount</button>

{/* count ki value update to ho rhi hai lekin count ki value last count value jitni hai iss liye Rerender nhi karega
ager count ki value last value se diff. hogi to hi comp. ko Rerender karega! */}
        <button onClick={()=>this.setState({count:this.state.count})}>SameCount</button>

{/* with props */}
        <ChildPureComp count2={this.state.count2} />
        
{/* same value */}
        <button onClick={()=>{this.setState({count2:this.state.count2})}}>same</button>
{/* diff.value */}
        <button onClick={()=>{this.setState({count2:this.state.count2+2})}}>Diff</button>
      </div>
    )
  }
}
