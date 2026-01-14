import React, { useState } from "react"
import { FaCircleXmark } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import Cheackout from "./cheackout.js";
import "../App.js"

const Bag=({visibility,products,onproductRemove,onClose,onQuantityChange,onRemoveAll})=>{
    const [show,setShow]=useState(false)
    const showfun=()=>{
        setShow(true)
    }
    return(
        <div className="shopping" style={{display:visibility?"block":"none"}}>
            <div className="top">
                <h4>Shopping Bag</h4>
                <button className="close" onClick={onClose} ><FaCircleXmark/></button>
            </div>
            <div className="content">
                <div className="countbox">
                    {products.length===0 && (<p className="empty">Your Bag is empty</p>)}
                    {products.map((pro)=>(
                        <div key={pro.id} className="boxitem">
                            <img src={pro.src} alt={pro.name} loading="lazy" />
                            <div className="outinformation">
                            <div className="infotmation" >
                                    <h3>{pro.name}</h3>
                                    <span className="price">{pro.price}LE</span>
                                </div>
                                <select value={pro.count} onChange={(e)=>{
                                    onQuantityChange(pro.id,pro.count,e.target.value)
                                }}>
                                    {[
                                        ...Array(10).keys(),
                                    ].map((number)=>{
                                        const num = number+1;
                                        return (
                                            <option value={num} key={num}>{num}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="total">Total: {pro.price * pro.count}LE</div>
                            <button className="closeitem" onClick={()=>{
                                onproductRemove(pro, pro.count)
                            }}><FaTrashCan/></button>
                        </div>
                    ))}
                </div>
                {products.length>0 && (
                    <div className="buttonsbox">
                        <button className="check" onClick={showfun}>Order</button>
                        <button className="check" onClick={onRemoveAll} >Remove All</button>
                    </div>
                )}
            </div>
            {show?<Cheackout products={products}/>:null}
        </div>
    )
}
export default Bag;