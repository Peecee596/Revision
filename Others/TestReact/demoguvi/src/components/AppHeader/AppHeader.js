// Stateful components
//they have state and they can change thier states

import React,{Component} from "react";

export default class AppHeader extends Component{
    state={
        "fname":"poonam",
        "lname":"chauhan"
    }

    render(){
    return(
        // <h1>Hi , m statefull components</h1>
        <h1>{this.state.fname}{this.state.lname}</h1>
        // <h1>
    )
}

}