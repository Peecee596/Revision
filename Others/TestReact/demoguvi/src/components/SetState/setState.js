import React, { Component } from 'react'

export default class SetState extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            result:""
        }

    }
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
        const finalresult=(this.state.firstname)

        this.setState({
            result:finalresult
        })
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" name="firstname"onChange={this.handleInputChange} value={this.state.firstname}/>
                

                <button onClick={this.onClickSubmit}>Submit</button>

                <h1>{this.state.firstname}</h1>
                <h1>{this.state.result}</h1>
            </React.Fragment>
        )
    }
}