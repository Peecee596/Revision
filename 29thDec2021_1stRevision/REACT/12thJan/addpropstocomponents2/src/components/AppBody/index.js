import React, { Component } from 'react'

export default class AppBody extends Component{
    constructor(props){
       super(props)
        this.state={
            firstname:"",
            lastname:"",
            result:"",
            result2:""
        }
    }

    handleInputChange=(e)=>{
        const target=e.target
        const name=target.name
        const value=target.value

        this.setState({
            [name]:value
        })
    }
    onClickSubmit=(e)=>{
        const result=(this.state.firstname)+" "+(this.state.lastname)
        const intfinalresult=parseInt(this.state.firstname)+parseInt(this.state.lastname)
        //const intfinalresult=parseInt(finalresult)
        this.setState({
            result:result
        })
        console.log(this.state.result)
    }

    render(){
    return(
        <div>
        <input type="text" name="firstname" onChange={this.handleInputChange} value={this.state.firstname}/>
        <input type='text' name="lastname"onChange={this.handleInputChange} value={this.state.lastname}/>
        <button onClick={this.onClickSubmit}>Submit</button>
        <h1>{this.state.firstname}{this.state.lastname}</h1>
        <h2>{this.state.result}</h2>
        </div>
    )
}
}
