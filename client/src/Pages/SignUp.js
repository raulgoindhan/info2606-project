import React, {useState, useEffect } from 'react'
import { HomeCard } from '../Components/HomeCard'
import { Nav } from '../Components/Nav'
import './style.css'

export const SignupPage = ()=>{



    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        fetch('http://localhost:8080/signup', {
            method: 'POST',
            body: JSON.stringify({
                username: event.target[0].value,
                password: event.target[1].value
            }),
            headers: {
                "crossDomain": "true",
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(message => console.log(message))
    }
    
    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input  type='text' id='username' required/>

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' required/>
            
            <button className="button" id="signup" type="submit">Sign Up</button>

        </form>
       

       
        </>
    )
}