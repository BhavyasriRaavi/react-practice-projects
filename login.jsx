
import React from "react";
import {useState} from "react";


const LoginForm=()=>{

    const [formData , setFormData]= useState(
        {
            username:"",
            password:"",
            emailid:"",
            phonenumber:"",
            age:""
        }
    )
  const handleChange=(e)=>{
     const{name,value}=e.target;
     setFormData({...formData,[name]:value});
  }

    const handleSubmit=async(e)=>{
    e.preventDefault();
    const apiUrl= "https://www.youtube.com/";
    try{
        const response= await fetch(apiUrl,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            }

        })
        if(response.ok){
            console.log("Logged in successfully");
        }else{
            console.log('error occured');
        }

    }catch(e){
        console.log("error",e)
    }
    }
    return(
            <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type= "text" name= "username" value={formData} onChange={handleChange}/>
              </label>
              <br/>
              <br/>
              <label>
                Email Id:
                <input type ="email"  name="emailid" value={formData.username} onChange={handleChange}/>
              </label>
              <br/>
              <br/>
               <label>
                Password:
                <input type= "password" name="Password" value={formData.password} onChange={handleChange}/>
               </label>
               <br/>
               <br/>
               <label>
                Age:
                <input type= "number" name=" age" value={formData.age} onChange={handleChange}/>
               </label>
               <br/>
               <br/>
               <label>
                Mobile No:
                <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange}/>
               </label>
               <div>
                <button type="submit" >Login</button>
               </div>
            </form>
        </div>
    )
}
export default LoginForm