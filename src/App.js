import React, { useState } from 'react'; 
import Spelling from './Spelling'
import words from './words.csv'

function App() {
  const [spelling, upadteSpelling] = useState([]);
  const [words, updateWords] = useState([words]);
  return (
    <>
    <Words words={words}/>
    <Spelling spelling={spelling}/>
    <input type="text" />
    <button>Finsihed</button>
    </>
  );
}

export default App;
