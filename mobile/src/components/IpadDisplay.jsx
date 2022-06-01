import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react';
import Ipad from './Ipad';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ipad_id } from '../redux/actions/index';

import { useDispatch, useSelector } from 'react-redux';
import {addItem,delItem} from "../redux/actions/index"
function IpadDisplay({log}) {
    const ipad = useParams();
    const [data, setData]=useState([])
    const[cartBtn,setcartBtn]=useState("Add To Cart")
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const product=useSelector((store)=>store.reduce.product)
    const {id} =useParams();

    useEffect(()=>{
      dispatch(ipad_id(id))
    },[])
    const handleCart=(data)=>{
        if(log){
            if(cartBtn === 'Add To Cart'){
                dispatch(addItem(data))
                setcartBtn("Remove from cart")
            }
            else{
             dispatch(delItem(data))
                setcartBtn("Add To Cart")
            }
           }
    }
  return (
    <div>
        <div className="container my-5 py-1" >
            <div className="row">
                     <div className="col-md-6 d-flex justify-content-center mmx-auto product">
                         <img src={product.img} alt="" height="400px"  />
                     </div>   
                     <div className="col-md-6 d-flex flex-column justify-cuntent-center">
                         <h1 className='display-5 fw-bold' >{product.title}</h1>
                         <hr />
                         <h2 className='my-4' >Rs - {product.price}</h2>
                         <p className='lead'>{product.desc}</p>
                         {log ? 
                            <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                               
                               :
                            <div>
                                 <button className='btn btn-outline-primary my-5'  data-bs-toggle="modal" data-bs-target="#thankyouModal">Add To Cart</button>
                                <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Login First</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Please login to your account !
                                    
                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={()=>{
                                            navigate("/Login")
                                        }}  type="button" data-bs-dismiss="modal" class="btn btn-outline-primary">Go to Login</button>
                                    

                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div> }
                     </div>
            </div>
        </div>
       
    </div>
  )
}

export default IpadDisplay