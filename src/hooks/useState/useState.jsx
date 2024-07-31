import { useState } from "react";

export const Example = () =>{

    const [value, setValue ]  = useState(0)

    const handleClick = () =>{
        setValue(value+1)
    }

    return(
        <>
       
        <div> {value} </div>
        <button  onClick={handleClick}> cick me</button>
        </>
    )
}