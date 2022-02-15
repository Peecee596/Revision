import React, { useEffect } from "react";
import { useState } from "react";
export default function AppFooter(){
    
    const[lastname,setData]=useState(null)

    //const [firstname,setData]=useState(null)

    useEffect(()=>{
        setData('Jones')
    },[])

    return(
        <div>
             <h1>Hi , Hook Functional Component</h1>
             <h2>{lastname}</h2>
        </div>

    )
}