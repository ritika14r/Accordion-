import React, { useState } from 'react';

const MyAcordion=({question,answer})=>{
    const [show,setshow]=useState(false);
    var sign;
    if(show==true){
        sign= "➖";
    }
    else{
        sign="➕";
    }
    return(
        <>
        <div className="main-heading">
        <p className="sign" onClick={()=>setshow(!show)}>{sign}</p>
        <h3 className="question">{question}</h3>
        </div>
        {show && <p className="answer">{answer}</p>}
        </>
    )
}
export default MyAcordion;