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
    // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    handleInputChange=(e)=>{
        const target=e.target;
        const name=target.name;
        const value=target.value

        this.setState({
            [name]:value
        })
        console.log(this.state.firstname)
    }
    onClickSubmit=(e)=>{
        const finalresult=(this.state.firstname)+" "+(this.state.lastname)
        const intfinalresult=parseInt(this.state.firstname)+parseInt(this.state.lastname)
        //const intfinalresult=parseInt(finalresult)
        this.setState({
            result:finalresult,
            result2:intfinalresult
        })
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" name="firstname"onChange={this.handleInputChange} value={this.state.firstname}/>
                <input type="text" name="lastname" onChange={this.handleInputChange} value={this.state.lastname}/>

                <button onClick={this.onClickSubmit}>Submit</button>

                <h1>{this.state.firstname}{this.state.lastname}</h1>
                <h1>{this.state.result}</h1>
                <h1>{this.state.result2}</h1>
            </React.Fragment>
        )
    }
}