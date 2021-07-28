import React from "react";
import Component from "./Component.jsx";


const Hover=({state,increment})=>{
    return(
        <>
            <button onMouseOver={increment}>mouse over here {state}</button>
        </>
    )
}
export default Component(Hover);