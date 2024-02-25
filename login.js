import React  from 'react';
import "./login.css";
import {Link} from 'react-router-dom';
import {useState } from 'react';


const Loginform=()=>{
    const[formData,setFormData]=useState({
        email:'',
        passwrd:''
    }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };    
    var attempt = 3; 
    function validate() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (email === "bhavyaraavi16@gmail.com" && password === "Trento$198") {
            alert("Login successfully");
            return false;
        }
        else {
            attempt--;
            alert("You have left " + attempt + " attempt;");
            if (attempt === 0) {
                document.getElementById("email").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:8080/signup', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                alert('Login successful!');
            } else {
                console.error('Error:', response.status, response.statusText);
                alert('Signup failed. Please try again.');
            }
        } catch (error) {
          console.error('Error:', error);
          alert('An unexpected error occurred. Please try again.');
        }
      }
    
return(
    <div className='signin-form' >
        <div className='input-container'>
            <form className='form-container' onSubmit={handleSubmit} >
                <h2 className='heading'>Login to your Account</h2>
                <label for="email">E.mail-Id : </label>
                <input type='email' id="email" className='email'value={formData.value} placeholder='Enter your Email Id' onChange={handleChange} required ></input>
                <br />
                <label for="password">Password: </label>
                <input type='password' id="password" className='password'value={formData.value} placeholder='Enter your password' onChange={handleChange} required ></input>
                <br />
                <button onClick={validate} type='submit' id='submit'className='signin'>Sign In</button>
                <p class="signup-link"> Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </form>
        </div>
    </div>
)

}
export default Loginform