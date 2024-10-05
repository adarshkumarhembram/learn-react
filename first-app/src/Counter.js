import { useState } from "react";



function Counter(){
    const [isEditing,setEditing]= useState(false);


    return (
        <>
           {
            (isEditing) ? <input /> : <p>some todo</p>
           }
            <br />
            <button onClick={() => setEditing(!isEditing)}>Click</button>   

        </>
    );
}

export default Counter;