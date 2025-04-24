import React, { Component } from 'react'

export default class ClassEvent extends Component {

    message = () => {
        alert("Inside the Class Event Component")
    }

  render() {
    return (
      <div>
        <button onClick={this.message}>Events - Class Event</button>
      </div>
    )
  }
}


export function FunctionEvent() {
   const message = () => {
        alert("Inside the Function Event Component")
    }
  return (
    <div>
        <button onClick={message}>Events - Function Event</button>
    </div>
  )
}
