import React from "react";
export default function Players(props){

    const renderPlayers=()=>{
        return props.players.map((cvalue)=>(
            <ul>                
                <li id={cvalue.id}>{cvalue.name}:<br/>{cvalue.desc}</li>
            </ul>
        ))
    }
    return(
        <div>
            Our Top Players
            {renderPlayers()}

        </div>
    )
}