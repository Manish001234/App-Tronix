import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react';
import Product from './mobile';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import { useDispatch } from 'react-redux';
import {addItem,delItem} from "../redux/actions/index"

const MobileDisplay = () => {
    const mobid = useParams();
    const[cartBtn,setcartBtn]=useState("Add To Cart")
    const navigate = useNavigate();

    const [data, setData]=useState([])
    const getData=()=>{
        axios.get(`https://backend1242.herokuapp.com/mobiles/${mobid.id}`).then((res)=>{
            setData(res.data)
            console.log(res.data)
           
        }).catch((e)=>{
          console.log(e)
        })
    }
    useEffect(()=>{
        getData();
    },[])
    const dispatch = useDispatch()
    const handleCart=(data)=>{
       if(cartBtn === 'Add To Cart'){
           dispatch(addItem(data))
        //    setcartBtn("Remove from cart")
       }
       else{
        dispatch(delItem(data))
           setcartBtn("Add To Cart")
       }
    }
  return (
    <div>
        <div className="container my-5 py-1" >
            <div className="row">
                     <div className="col-md-6 d-flex justify-content-center mmx-auto product">
                         <img src={data.img} alt="" height="400px"  />
                     </div>   
                     <div className="col-md-6 d-flex flex-column justify-cuntent-center">
                         <h1 className='display-5 fw-bold' >{data.title}</h1>
                         <hr />
                         <h2 className='my-4' >Rs - {data.price}</h2>
                         <p className='lead'>{data.desc}</p>
                         <button onClick={()=>handleCart(data)} className='btn btn-outline-primary my-5' data-bs-toggle="modal" data-bs-target="#thankyouModal">{cartBtn}</button>
                         
                            <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">CONGRATULATIONS.</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Item successfully added to cart
                                    
                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={()=>{
                                            navigate("/cart")
                                        }}  type="button" data-bs-dismiss="modal" class="btn btn-outline-primary">Go to cart</button>
                                    

                                    </div>
                                    </div>
                                </div>
                            </div>

                     </div>
            </div>
        </div>

    </div>
  )
}

export default MobileDisplay