import React from 'react';
import './signup.css';
import { useState } from 'react';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    reenterPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.reenterPassword) {
      alert("Passwords don't match. Please re-enter.");
    } else {
      const requestData = {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      };
      try {
        const response = await fetch('http://localhost:8080/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          alert('Signup successful!');
        } else {
          console.error('Error:', response.status, response.statusText);
          alert('Signup failed. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  }
  return (
    <div className='signup-form'>
      <div className='second-container'>
        <h2>Register Here To Login into Your Account!</h2>
        <form className='form-container1' onSubmit={handleSubmit}>
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder='Enter your Full Name' name="username" value={formData.username} onChange={handleChange} required /><br />
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder='Enter your Mail Id' name="email" value={formData.email} onChange={handleChange} required /><br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='Enter your password' value={formData.password} onChange={handleChange} required /><br />
          <label for="repassword">Re-enter Password:</label>
          <input type="password" id="repassword" name="reenterPassword" placeholder='Re-Enter your password' value={formData.reenterPassword} onChange={handleChange} required /><br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  )
}
export default SignupForm