import React from "react";
export default function AppHeader(props){
    return(
        <div>   
            <h1>Hi AppHeader</h1>
            <h1>{props.username}'s location is {props.location} and hobby is {props.hobby}</h1>
        </div>
    )
}