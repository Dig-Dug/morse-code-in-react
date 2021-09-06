
const Sound = () => {
    return ( 
      <div>
              <button onClick={callMorse}>a</button>
              <button onClick={callMorse}>e</button>
              <button onClick={callMorse}>i</button>
              <button onClick={callMorse}>o</button>
              <button onClick={callMorse}>u</button>
              
    </div>
     );
}
function callMorse() {
    function handleSubmit(e) {
      e.preventDefault();
     console.log('You clicked submit.');
    }
  
   return (
      <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      </form>
    );
  }
  
export default Sound;