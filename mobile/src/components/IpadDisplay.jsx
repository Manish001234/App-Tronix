import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react';
import Ipad from './Ipad';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import {addItem,delItem} from "../redux/actions/index"
function IpadDisplay() {
    const ipad = useParams();
    const [data, setData]=useState([])
    const[cartBtn,setcartBtn]=useState("Add To Cart")
    const getData=()=>{
        axios.get(`https://backend1242.herokuapp.com/Ipads/${ipad.id}`).then((res)=>{
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
           setcartBtn("Remove from cart")
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
                         <button onClick={()=>handleCart(data)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                     </div>
            </div>
        </div>
       
    </div>
  )
}

export default IpadDisplay