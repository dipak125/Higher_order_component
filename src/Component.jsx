import React, {useState} from "react";

export default (Original)=>{
    const EhancmendComponent=()=>{
        const[state,setState]=useState(0);
        const increment=()=>{
            setState(state+1)
        }
        
          return  <Original state={state} increment={increment}/>
        
    }
    return EhancmendComponent
}