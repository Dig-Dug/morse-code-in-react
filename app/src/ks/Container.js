//import sounds from "./sounds.json";
import ReactDOM from 'react-dom';
import React from 'react';
import InputButton from './InputButton';
import Abecedary from './Abecedary';

const mixWords = () =>{
    
}
class Container extends React.Component{
    render(){
        return(
            <h1>jjjj</h1>,
            <div> 
                <InputButton {...Abecedary.playB}/>
                <Abecedary/>
            </div>
           
        )
    }
    
}


  export default Container;