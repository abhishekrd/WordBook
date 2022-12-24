import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Main from './components/Main.js';
import Meanings from './components/Meanings.js';

function App() {

  const [means, setMeans] = useState([]); 
  const [word, setWord] = useState("");
  const [defs, setDefs] = useState([]);

  const getWords = async () => {
    try{
     const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
     setMeans(data);
     setDefs(data.data)
    }
    catch(err){
      console.log(err);
    }
  }

  console.log(means.data);

  useEffect(() => {
    getWords()
  },[word])
  return (
    <>
    <Main word={word} setWord={setWord}/>
    <Meanings means={means} word={word} defs={defs}/>
    </>
  )
}

export default App
