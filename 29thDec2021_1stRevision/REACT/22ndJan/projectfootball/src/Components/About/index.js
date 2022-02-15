import React, { Component } from "react";
export default class About extends Component{
    constructor(props){
        super(props);
        this.state={
            "firstname":"",
            "lastname":"",
            "result":"",
            "result2":""
        }
    }
    handleInputChange=(e)=>{
        const change=e.target;
        const statename= change.name;
        // const value=change.value;

        this.setState({
        //    firstname:change.value,
        //    lastname:change.value
        //    [change.name]:change.value
            [statename]:change.value
        })
        console.log(this.state.firstname)
    }
    submitButton=(e)=>{
        const finalresult=(this.state.firstname)+" "+(this.state.lastname)
        const finalresult2=parseInt(this.state.firstname)+parseInt(this.state.lastname)
        this.setState({
            result:finalresult,
            result2:finalresult2
        })
        console.log(this.state.result);       

    }
    render(){
    return(
        <div>
            About page<br/>
            <input type="text" name="firstname" onChange={this.handleInputChange} value={this.state.firstname}/>
            <input type="text" name="lastname" onChange={this.handleInputChange} value={this.state.lastname}/>
            <h1>{this.state.firstname}{this.state.lastname}</h1>
            <button onClick={this.submitButton}>Submit</button>
            <h1>{this.state.result}</h1>
            <h1>{this.state.result2}</h1>
        </div>
    )
}
}