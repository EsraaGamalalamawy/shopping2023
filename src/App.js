import {React,useState} from 'react'
import { FaPersonDress } from "react-icons/fa6";
import { FaChildren } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import {AccChild} from "./component/accChild"
import {AccMen} from "./component/accMen"
import {AccWoman} from "./component/accWoman";
import {WatchWoman} from "./component/watchWoman";
import { BagWoman } from './component/bagWoman';
import {HairTie} from "./component/hairTie";
import {HairTieChild} from "./component/hairTieChild";
import {HatChild} from "./component/hatChild";
import {BagMen} from "./component/bagMen";
import {WatchMen} from "./component/watchMen";
import Bag from './component/bag';
import "./App.css"

const App = () => {
  const [done1,setDone1]=useState(false)
  const [done2,setDone2]=useState(true)
  const [done3,setDone3]=useState(false)
  const [done4,setDone4]=useState(true)
  const [done5,setDone5]=useState(false)
  const [done6,setDone6]=useState(false)
  const [done7,setDone7]=useState(false)
  const [done8,setDone8]=useState(true)
  const [done9,setDone9]=useState(false)
  const [done10,setDone10]=useState(false)
  const [show,SetShow]=useState([...WatchMen])
  const [buttons,setButtons]=useState("man")
  const [depart1,setDepart1]=useState(true)
  const [depart2,setDepart2]=useState(false)
  const [depart3,setDepart3]=useState(false)

  const [visible,setVisible]=useState(false)
  const [product,setProduct]=useState([])
  const [counter,setCounter]=useState(0)

  const Additem=(item)=>{
    const newproducts=product.filter(element=>{
        return element.id!==item.id
    })
    if(newproducts.length===product.length){
        setCounter(counter+1)
    }
    setProduct([...newproducts,{...item,count:1}])
    
  }
  const onclose=()=>{
      setVisible(false)
  }
  const quatify=(id,old,count)=>{
    setProduct(
        product.map(ele=>{
            if(ele.id===id){
                setCounter(+counter + +count - +old)
                ele.count=count
            }
            return ele
        })
    )
  }
  const remove=(pro,count)=>{
      setProduct((old)=>{
          const proindex=old.findIndex((item)=>
              item.id===pro.id
          )
          if(proindex !== -1){
              old.splice(proindex , 1)
              setCounter(+(counter) - count)
          }
          return [...old]
      })
  }
  const onRemoveAll=()=>{
      setProduct([])
      setCounter(0)
  }
  const reserbuttons=()=>{
    setDone1(true)
    setDone2(false)
    setDone3(false)
    setDone4(true)
    setDone5(false)
    setDone6(false)
    setDone7(false)
    setDone8(true)
    setDone9(false)
    setDone10(false)
  }
  const restDepart=(one,two,three)=>{
    setDepart1(one)
    setDepart2(two)
    setDepart3(three)
  }
  const manbtn=(one,two,three)=>{
    setDone1(one)
    setDone2(two)
    setDone3(three)
  }
  const womanbtn=(one,two,three,four)=>{
    setDone4(one)
    setDone5(two)
    setDone6(three)
    setDone7(four)
  }
  const childrenbtn=(one,two,three)=>{
    setDone8(one)
    setDone9(two)
    setDone10(three)
  }
  return (
    <div>
      <Bag key="bag" visibility={visible} products={product} onClose={onclose} onQuantityChange={quatify} onproductRemove={remove} onRemoveAll={onRemoveAll}  />
      <nav className="header">
            <button className={depart1? "depart2":"depart1"} onClick={()=>{
                restDepart(true,false,false)
                setButtons("man")
                SetShow([...AccMen])
                reserbuttons()
            }} ><FaPerson/></button>
            <button className={depart2? "depart2":"depart1"} onClick={()=>{
                restDepart(false,true,false)
                setButtons("woman")
                SetShow([...AccWoman])
                reserbuttons()
            }} ><FaPersonDress/></button>
            <button className={depart3? "depart2":"depart1"} onClick={()=>{
                restDepart(false,false,true)
                setButtons("children")
                SetShow([...AccChild])
                reserbuttons()
            }} ><FaChildren/></button>
            <button className="button" onClick={()=>{
                setVisible(true)
            }}>
                <FaBagShopping/>
                <div className="counter">{counter}</div>
            </button>
        </nav>
        <div className="box">
          {buttons==="man" && (
              <nav className="topnav">
              <button className={done1? "btndone":"btn"} onClick={()=>{
                  SetShow([...AccMen])
                  manbtn(true,false,false)
              }}>Accessory</button>
              <button className={done2? "btndone":"btn"} onClick={()=>{
                  SetShow([...WatchMen])
                  manbtn(false,true,false)
              }}>Watch</button>
              <button className={done3? "btndone":"btn"} onClick={()=>{
                  SetShow([...BagMen])
                  manbtn(false,false,true)
              }}>Bag</button>
          </nav>
          )}
          {buttons==="woman" && (
              <nav className="topnav">
              <button className={done4? "btndone":"btn"} onClick={()=>{
                  SetShow([...AccWoman])
                  womanbtn(true,false,false,false)
              }}>Accessory</button>
              <button className={done5? "btndone":"btn"} onClick={()=>{
                  SetShow([...WatchWoman])
                  womanbtn(false,true,false,false)
              }}>Watch</button>
              <button className={done6? "btndone":"btn"} onClick={()=>{
                  SetShow([...BagWoman])
                  womanbtn(false,false,true,false)
              }}>Bag</button>
              <button className={done7? "btndone":"btn"} onClick={()=>{
                  SetShow([...HairTie])
                  womanbtn(false,false,false,true)
              }}>Hair Tie</button>
          </nav>
          )}
          {buttons==="children" && (
              <nav className="topnav">
              <button className={done8? "btndone":"btn"} onClick={()=>{
                  SetShow([...AccChild])
                  childrenbtn(true,false,false)
              }}>Accessory</button>
              <button className={done9? "btndone":"btn"} onClick={()=>{
                  SetShow([...HairTieChild])
                  childrenbtn(false,true,false)
              }}>Hair Tie</button>
              <button className={done10? "btndone":"btn"} onClick={()=>{
                  SetShow([...HatChild])
                  childrenbtn(false,false,true)
              }}>Hat</button>
          </nav>
          )}
          {show.map((ele)=>{
            return(
                <div key={ele.id} className='item'>
                    <div className='parent'>
                        <div className='front'>
                            <img src={ele.src} alt='item' loading='lazy' />
                            <p>{ele.name}</p>
                            <h4>{ele.price}LE</h4>
                        </div>
                        <div className='back'>
                            <button className="btn1" onClick={()=> Additem(ele)}>Add to your Bag</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            )
            
        })}
      </div>
    </div>
  )
}

export default App
