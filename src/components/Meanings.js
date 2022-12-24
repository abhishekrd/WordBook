import { Container } from '@mui/system';
import React from 'react'

const Meanings = ({means,word,defs}) => {
 
console.log(means.data);
  return (
    <Container>
    <div>
      {defs[0] && word && (<audio src={defs[0].phonetics[0] && defs[0].phonetics[0].audio} controls></audio> )}
      { word === "" ? <p className='meaning-txt'>Meanings will appear here</p> : (means && means.data) ? means.data.map((item) => item.meanings.map((meaning) => meaning.definitions.map((def) => <div className='mean-card'>
        
        <p className='meaning-txt'>{def.definition}</p>
        {def.example ? <p className='meaning-txt'><strong>Example :</strong> {def.example}</p> : ""}
       
        {def.synonyms && (<p className='meaning-txt'><strong>{def.synonyms == "" ? "" : "Synonyms : "}</strong>{def.synonyms.map((syno) => `${syno}, `)}</p>)}
        <hr></hr>
      </div> ))) : <h1>Loading...</h1> }
      </div>
      </Container>
     )
}

export default Meanings