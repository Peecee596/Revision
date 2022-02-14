import react, { Component } from 'react'
export default class Addstate extends Component{
    constructor(props){
        super(props)
        this.state={
            'firstname':"Poonam",
            'lastname':"Chauhan"
        }
        this.setState({
            'firstname':"shivam"
        })
    }
    render(){
        return(
            <div>
                <p>my fullname is {this.state.firstname}{this.state.lastname}</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}