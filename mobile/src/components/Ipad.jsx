import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ipads_api } from '../redux/actions';
import {loading} from "../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux';

const Ipad = () => {

    const {products,loading}= useSelector((store) => store.ipads);
    const [mobiledata,setMobiledata]=useState([...products])

    const dispatch = useDispatch();
     
    useEffect(()=>{
      dispatch(ipads_api())
      setMobiledata([...products])
    },[dispatch])

    
    const handlecat=(category)=>{
      let item =  products.filter((item)=> {return item.title === category})
      setMobiledata([...item])
      
    }
   
    function handlesort(e){
      if(mobiledata.length==0){
        let x;
        if(e.target.value === "asc"){
         x = products.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
        }
        else if(e.target.value === "desc"){
         x = products.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
        }
        setMobiledata([...x]);
      }
      else{
        let x;
        if(e.target.value === "asc"){
         x = mobiledata.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
        }
        else if(e.target.value === "desc"){
         x = mobiledata.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
        }
        setMobiledata([...x]);
      }
     }
    
     const carditem=(item)=>{
      return(
        <div className="card my-5 py-4" key={item.id} style={{width:" 18rem"}}>
    <img src={item.img} className="card-img-top" alt={item.title}/>
    <div className="card-body text-center">
      <h5 className="card-title">{item.title}</h5>
      <p className="lead">Rs.{item.price}</p>
      <Link to={`/Ipads/${item._id}`} className="btn btn-outline-primary">Buy Now</Link>
    </div>
  </div>
      )
    }
      return (
        <>
        
          <div className="container py-4">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Ipad</h1>
                <hr />
                 <div className="sortbtn">
                   <select name="" id="" onChange={handlesort}>
                      <option value="">Sort by price</option>
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                   </select>
                      <select onChange={(e)=>{
                handlecat(e.target.value)
              }}>
              <option value="">Filter by title</option>
              <option value="all">All</option>
              <option value="Ipad">Ipad</option>
              <option value="Ipad Pro">Ipad Pro</option>
              <option value="Ipad A-14">Ipad A-14</option>
              <option value="Ipad A-13">Ipad A-13</option>


             
            </select>
                 </div>
              </div>
            </div>
          </div>
          <div className="container">
              <div className="row justify-content-around">
              {
                loading?(<h2 className="load">loading...</h2> ):
                (
                  mobiledata.length>0 ? mobiledata.map(carditem): products.map(carditem)
                  // products.map(carditem)
              
              )}
              </div>
            </div>
      
        </>
      );
}

export default Ipad