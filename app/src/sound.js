//import sounds from "./sounds.json";
import ReactDOM from 'react-dom';
const Sound = () => {
  

    return ( 
      
      <div>
              <button onClick={callMorse} >a</button>
              <button onClick={callMorse}>e</button>
              <button onClick={callMorse}>i</button>
              <button onClick={callMorse}>o</button>
              <button onClick={callMorse}>u</button>
              
    </div>
     );
}

function callMorse() {
  //console.log("a");
  
  
  switch(callMorse){
    case 'callMorse.a': console.log("xxx"); break;
    case 'e': console.log("ooo"); break;
    default : console.log("w22")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log('You clicked submit.');
  }
  let audio = new Audio("./tst.mp3");
  const start = () => {
    audio.play()
  }
  //ReactDOM.render(callMorse,document.getElementById('w'));
 return (
 
    <form onSubmit={handleSubmit}>
    <button onClick={start} type="submit">Submit</button>
    <button id="w"onClick={start}>Play</button>
    </form>
  );
}
//(callMorse,document.getElementById('w'));
  
export default Sound;