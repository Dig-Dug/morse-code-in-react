import logo from './mrs.gif';
import './App.css';
import Sound from './sound';

function App() {


  return (
    
    <div className="App">
      <header className="App-header">
        <h1>MORSE TRANSLATOR</h1>
        <h2>*under construction * *</h2>
        <label>write it: <input type="text" name="text" />
        <button >hear it</button> 
         </label>
   
       
         <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          check each character 
        </p>
        <Sound/>
      </header>
    </div>
  );
}


export default App;
