import React, { Component } from "react";

class EmployeeDetails extends Component{
    render(){

        let {id,name,dept} = this.props

        // this.props.id=201

        return <div>
            
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Dept: {dept}</li>
            </ul>
        
        </div>
    }
}

export default EmployeeDetails




