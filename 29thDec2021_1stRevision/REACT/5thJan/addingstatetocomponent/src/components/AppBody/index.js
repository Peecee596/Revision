import React, { Component } from "react";
export default class Appbody extends Component{
    constructor(props){
        super(props)
        this.state={
            'fname':"Poonam",
            'lname':"Chauhan"
        }
    }
    render(){
        return(
            <div>
            <h1>This is an AppBody</h1>
            <h3>Full name is {this.state.fname}{this.state.lname}</h3>
            </div>
        )
    }
}