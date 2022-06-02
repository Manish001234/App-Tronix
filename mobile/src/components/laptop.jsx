import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions";
import { laptops_api } from '../redux/actions';
import {loading} from "../redux/actions/index"



export const Laptop = () => {

    const {products,loading} = useSelector((store) => store.laptops);
    const [laptopdata,setLaptopdata]=useState([...products])
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(laptops_api())
      setLaptopdata([...products])
    },[dispatch])

    const handlecat=(category)=>{
      let item =  products.filter((item)=> {return item.title === category})
      setLaptopdata([...item])
      
    }

    function handlesort(e){
      if(laptopdata.length==0){
        let x;
        if(e.target.value === "asc"){
         x = products.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
        }
        else if(e.target.value === "desc"){
         x = products.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
        }
        setLaptopdata([...x]);
      }
      else{
        let x;
        if(e.target.value === "asc"){
         x = laptopdata.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
        }
        else if(e.target.value === "desc"){
         x = laptopdata.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
        }
        setLaptopdata([...x]);
      }
     }
     
     const carditem=(item)=>{
      return(
        <div className="card my-5 py-4" key={item.id} style={{width:" 18rem"}}>
    <img src={item.img} className="card-img-top" alt={item.title}/>
    <div className="card-body text-center">
      <h5 className="card-title">{item.title}</h5>
      <p className="lead">Rs.{item.price}</p>
      <Link to={`/laptops/${item._id}`} className="btn btn-outline-primary">Buy Now</Link>
    </div>
  </div>
      )
    }
   
      return (
        <>
        
          <div className="container py-4">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Laptop</h1>
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
              <option value="Mac Book Air">Macbook Air</option>
              <option value="Mac Book pro">Macbook pro</option>
             
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
                  laptopdata.length>0 ? laptopdata.map(carditem): products.map(carditem)
                  // products.map(carditem)
              
              )}
              </div>
            </div>
           
        </>
      );
}
