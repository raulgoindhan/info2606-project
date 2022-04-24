import React, {useState, useEffect } from 'react'
import { HomeCard } from '../Components/HomeCard'
import { Nav } from '../Components/Nav'
import {responsiveVoice} from 'https://code.responsivevoice.org/responsivevoice.js?key=lERDBbum"'
import './style.css'

let speech = new SpeechSynthesisUtterance();
export const GamePage = ()=>{
    const handleSpeech = (event) =>{
        fetch('http://localhost:8080/worddata')
        .then(response => response.json())
        .then(data => textToSpeech(data));
    }


    function textToSpeech(text){
        responsiveVoice.speak("test")
    
    }

    return(
        <>
       <div>
        <h1>Guess a Word</h1>
        <button onclick={handleSpeech}>Start</button>

       

        <p id="question"></p>
        <form onSubmit>
        <input type="text" id="guess" maxlength="1"/>
        <button className="button" id="guessbut" type="submit">Guess</button>
        </form>

        <script></script>

        </div>
        


        </>
    )
}