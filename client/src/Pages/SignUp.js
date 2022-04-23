import React, {useState, useEffect } from 'react'
import { HomeCard } from '../Components/HomeCard'
import { Nav } from '../Components/Nav'
import './style.css'

export const SignupPage = ()=>{

    const [addUser, setAddUser] = useState('')
    
    return(
        <>
        
        <form >
            <label for='username'>Username:</label>
            <input  type='text' id='username' required/>

            <label for='password'>Password:</label>
            <input type='password' id='password' required/>
            
            <button class="button" id="signup" type="submit">Sign Up</button>

        </form>
       

       
        </>
    )
}