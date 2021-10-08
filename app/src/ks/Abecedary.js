import React from 'react';
import * as Tone from 'tone'

//import SoundHandler from './SoundHandler';
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.FMSynth(Tone.Synth).toDestination();
//const plucky = new Tone.PluckSynth().toDestination();
const osc = new Tone.Oscillator().toDestination();
const now = Tone.now()




const playAudio = () => {
    Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        osc.start(time).stop(time + 0.1);
    }, "8n");
    // transport must be started before it starts invoking events
    Tone.Transport.start();
    Tone.Transport.stop();
  }
const playB = () => {
   // synth.triggerAttackRelease("F4", now + 0.5) 
    osc.start("8n"); osc.stop("+0.5")
    

/*     osc.sync().start(0).stop(0.3);
// start the transport.
Tone.Transport.start();
// set it to loop once a second
Tone.Transport.loop = true;
Tone.Transport.loopEnd = 1; */
}
class Abecedary extends React.Component{
  /*  constructor(props) {
        super(props);
        this.playB = this.playB.bind(this);
      } */
    playA(){
        let o = new Tone.Oscillator(440, "sine").toDestination();
      
        Tone.Transport.bpm.value = 30;
        Tone.Transport.scheduleRepeat((time) => {
            o.start("8n").stop( "+0.5");
        }, "4n");
        // transport must be started before it starts invoking events
        Tone.Transport.start();
       
   
    }  
    playB(){osc.start("8n"); osc.stop("+0.5")}  
    playC(){osc.start("8n"); osc.stop("+0.5")}
    playD(){ osc.start("8n"); osc.stop("+0.5")}
    playE(){osc.start("8n"); osc.stop("+0.5")} 
    playF(){osc.start("8n"); osc.stop("+0.5")}

    render(){
        return(
                
            <div> 
      <button onClick={this.playA}>A</button> 
      <button onClick={this.playB}>B</button> 
      <button onClick={this.playC}>C</button> 
      <button onClick={this.playD}>D</button> 
      <button onClick={this.playE}>E</button> 
      <button onClick={this.playF}>F</button> 
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