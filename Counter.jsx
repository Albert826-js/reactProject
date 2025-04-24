
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => this.setState(pre => ({count:pre.count+1}),() => console.log("CallBack: ",this.state.count))}>Increment</button>
        <button onClick={() => this.setState(pre => ({count:pre.count-1}),() => console.log("CallBack: ",this.state.count))}>Decrement</button>
        <button onClick={() => {
             for(let i=1;i<=5;i++){
                this.setState(pre => ({count:pre.count+1}),() => console.log("CallBack: ",this.state.count))
            }
        }}>IncrementBy5</button>
        <button onClick={() => {for(let i=1;i<=5;i++){
            this.setState(pre => ({count:pre.count-1}),() => console.log("CallBack: ",this.state.count))
        }}}>DecrementBy5</button>
        <button onClick={() => {this.setState({count:0})}}>Reset</button>
      </div>
      
    )
  }
}


// increment(){

//     this.setState(pre => ({
//         count:pre.count+1
//     }),() => console.log("CallBack: ",this.state.count))

//     // this.setState({
//     //     count:this.state.count+1
//     // },() => console.log("CallBack: ",this.state.count)
//     // )

//     // console.log(this.state.count);
    
// }

// decrement(){

//     this.setState(pre => ({
//         count:pre.count-1
//     }),() => console.log("CallBack: ",this.state.count))

//     // this.setState({
//     //     count:this.state.count-1
//     // },() => console.log("CallBack: ",this.state.count)
//     // )

//     // console.log(this.state.count);
    
// }

// increment5(){
//     for(let i=1;i<=5;i++){
//         this.increment()
//     }
// }

// decrement5(){
//     for(let i=1;i<=5;i++){
//         this.decrement()
//     }
// }

// reset(){
//     this.setState({
//         count:0
//     })
// }