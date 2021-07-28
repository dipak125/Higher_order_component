import React from "react";
import Component from "./Component.jsx";

const Click=({state,increment})=>{
    return(
        <>
            <button onClick={increment}> Click here {state}</button>
        </>
    )
}
export default Component(Click);
