import { setIn } from "formik";
import { useEffect, useState } from "react";

const User =({name, location, contact})=>{
    let [count, setCount]= useState(0);
    let [count2, setCount2]= useState(0);
    let a ;
    useEffect(()=>{
        console.log("Child use effect");
    })
    useEffect(()=>{
     
        console.log("use effect1");
        return (()=>{
            console.log("clearing it with count");
           
        })
    },[count])

    useEffect(()=>{
        console.log("use effect2");

        return (()=>{
            console.log("clearing it with count2");
           
        })
    },[count2])
    return (<div className="user-card">

<h2> Name : {name}</h2>
<button onClick={()=>{setCount(count++)}}>count</button>
<button onClick={()=>{setCount2(count2++)}}>count2</button>
            <h3>Location : {location}</h3>
            <h4>Contact : {contact}</h4>
    </div>)
}

export default User;