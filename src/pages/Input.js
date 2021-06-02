import { useState } from "react";

const Input = ({ nombre, tipo, valueF, setFunction }) => {
    return(
        <input 
        type={tipo} 
        name={nombre} 
        value={valueF}        
        onChange={(e) => {
            setFunction(e.target.value)
        }}
        className="border border-gray-300 rounded-2xl w-80 h-14 bg-gray-100 text-xl text-center"></input>
    );  
};

export default Input;