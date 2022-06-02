import React from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem } from '../redux/actions/index';
import {updateaddd} from "../redux/actions/index";


function Cart() {
//    useSelector((store)=>store.item.addItem)
   const state =  useSelector((store)=>store.item)
   
   console.log(state,"state")
    const dispatch=useDispatch()
    const handleClose=(item)=>{
        dispatch(delItem(item))
    }
    const cartItems =(cartItem)=>{
        return (
            <div className="px-4 my-4 bg-light" key = {cartItem.id} >
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:'220px'}}>
                    <div style={{width:"200px"}}>
                        <img height="200px" width="180px" src={cartItem.img} alt="" />
                    </div>
                    <div style={{width:"15%"}}>
                        <h3>{cartItem.title}</h3>
                        <p className='lead fw-bold'>Rs : {cartItem.price}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch(updateaddd(cartItem,state,1))}  className="plus btn-outline-primary" >+</button>
                        <span style={{fontSize:"25px",margin:"0px 10px"}}>{cartItem.quantity}</span>
                        <button onClick={() => dispatch(updateaddd(cartItem,state,-1))} className="plus btn-outline-primary">-</button>

                    </div>
                    <div  style={{fontSize:"25px",width:"180px"}}>Total : {(+cartItem.quantity)*(+(cartItem.price.split(",").join("")))}</div>
                    <div><button onClick={()=>handleClose(cartItem)} className='btn btn-outline-primary ms-2 float-end' >Delete</button></div>
                </div>
            </div>
        )
    }
    const button=()=>{
        return(
            <div className="container">
                <div className="row">
                    <Link to="/checkout" className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To Checkout</Link>
                </div>
            </div>
        )
    }
    const emptyCart = () => {
        return ( 
            <div className="px-4 my-5 bg-light rounded-3" >
                <div className="container py-4">
                    <div className="row">
                        <h1>
                            Cart is Empty
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
  return (
  <>
  {state.length===0 && emptyCart() }
  {state.length !==0 && state.map(cartItems)}
  {state.length !==0 && button()}

</>
    
 
  )
}

export default Cart