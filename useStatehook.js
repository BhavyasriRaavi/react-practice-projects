import React,{useState} from "react";
function App1(){
    const [name,setName]= useState("Bhavya");
    return(
     <>
     <form>
     <label>Name:
         <input 
     type="text"
     value={name}
     onChange={(e)=>{setName(e.target.value)}}
     placeholder="Enter Your name"
     />
     </label>
     <p>My name is {name}</p>
     </form>
     </>
    )
}
export default App1