import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { SignupPage } from "./Pages/SignUp";
import { LoginPage } from "./Pages/Login";
import {GamePage} from "./Pages/Game"

import "./App.css";

function App() {
  return (
    <>
    <Nav />
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
    </>
  );
}

function Home() {
  return (
    <>
    
      <main>
      <Link to="/login" class="button">Login</Link>
      <Link to="/signup" class="button">Sign Up</Link>
      </main>
    
    </>
  );
}

function Login() {
  return (
    <>
      
      <main>
     <LoginPage />
      </main>
   
    </>
  );
}

function SignUp() {
  return (
    <>
      
      <main>
      <SignupPage/>
      </main>
   
    </>
  );
}

function Game() {
  return (
    <>
      
      <main>
      <GamePage/>
      </main>
   
    </>
  );
}

export default App;