import React from 'react';
import{useState} from 'react';
const CounterApp=()=>{
const [counter,setCounter] =useState(0)
    return(
        <div>
         <h1>{counter} times</h1>
         <button onClick={()=>setCounter(counter+1)}>Click Here</button>
        </div>
    )

}
export default CounterApp