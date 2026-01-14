import React, { useState } from 'react';
function Cheackout({products}) {
    const[display,setDisplay]=useState("")
    const closetap=()=>{
        setDisplay("none")
    }
    return (
        <div className="order" style={{display:display}}>
            <div className='right'onClick={closetap} >x</div>
            <p >Your Order has been executed</p>
        </div>
    );
}

export default Cheackout;