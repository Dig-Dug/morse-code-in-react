import React from 'react';
import * as Tone from 'tone'

//import SoundHandler from './SoundHandler';
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
//synth.triggerAttackRelease("C4", "8n");

const playAudio = () => {
    synth.triggerAttackRelease("C4", "8n")
    console.log("ioioioioioio")
  }
class Abecedary extends React.Component{
   

    render(){
        return(
                
            <div> 
      <button onClick={playAudio}>A</button> 
     
      <button >E</button> 
      <button>I</button> 
      <button>O</button> 
      <button>U</button> 
      <button>0</button> 
      <br/>
      <button>1</button> 
      <button>2</button> 
      <button>3</button>  
      <button>4</button> 
      <button>5</button> 
      <button>6</button> 
      <button>7</button> 
      <button>8</button> 
      <button>9</button> 
         </div>
           
        )
    }
}
export default Abecedary;