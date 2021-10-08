import React from 'react';
import Abecedary from './Abecedary';



class InputButton extends React.Component{
   
    render(){
        return(
            
            <div> 
       <input type="text" name="text" />
        <button onClick={this.playB}>hear it</button> 
       
      
         </div>
           
        )
    }
}
export default InputButton;