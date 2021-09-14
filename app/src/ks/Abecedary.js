import React from 'react';

//import SoundHandler from './SoundHandler';

const playAudio = () => {
    console.log("ioioioioioio")
  }
class Abecedary extends React.Component{
   
    render(){
        return(
                
            <div> 
      <button onClick={playAudio}>A</button> 
     
      <button>E</button> 
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