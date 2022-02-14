import React, { Component } from 'react'
export default class AppBody extends Component{
    constructor(props){
        super(props)
        this.state={
            "firstname":"",
            "lastname":"",
            "result":""
        }
    }

    handleInputChange=(e)=>{
        const target=e.target;
        const name=target.name;
        const value=target.value;

        this.setState({
            [name]:value
        })
        console.log(this.state.firstname)
        console.log(this.state.lastname)
    }
    // onClickSubmit=(e)=>{
    //     console.log(this.state)
    // }
    render(){
        return(
            <React.Fragment>
                <h1>Hi</h1>
                <input type='text' name='firstname' onChange={this.handleInputChange} value={this.state.firstname} placeholder='enter Fn'/>
                <input type='text' name="lastname" onChange={this.handleInputChange} value={this.state.lastname} placeholder='enter ln'/>
                <button onClick={this.onClickSubmit}>Submit</button>
                <h4>{this.state.firstname}{this.state.lastname}</h4>
            </React.Fragment>
        )
    }
}