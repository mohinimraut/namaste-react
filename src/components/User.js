import React,{useEffect,useState} from "react";
const User=({name,location})=>{
    const [count,setCount]=useState(0);
    const [count2]=useState(1);

    useEffect(()=>{
      timer=setInterval(()=>{
            console.log("Namaste React OP")
          },1000);

          return(()=>{
            clearInterval(timer)
          })
    },[]);
    return(
        <div className="user-card">
         <h1>Count : {count}</h1>
         <h1>Count2 = {count2}</h1>
         <h2>Name: {name}</h2>
         <h3>Location: {location}</h3>
         <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}

export default User;