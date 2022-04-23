import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {SignupPage} from "../Pages/SignUp"
import {LoginPage} from "../Pages/Login"

export const Nav = () => {
    return <>
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
    </ul> 
    </nav>
    
    </>
        
    
}