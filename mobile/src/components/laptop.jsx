import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions";
import { laptops_api } from '../redux/actions';
import {loading} from "../redux/actions/index"



export const Laptop = () => {
    const [filtering,setFiltering]=useState([])
    const {products,loading} = useSelector((store) => store.reduce);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(laptops_api())
    },[])
  
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
     
     function handlesort(e){
       let x;
       if(e.target.value === "asc"){
        x = data.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
       }
       else if(e.target.value === "desc"){
        x = data.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
       }
       setData([...x]);
     }
     
      function handleFilter(e){
        let x;
        if(e.target.value === "all"){
          x = filtering;
        }
        else{
          x = filtering.filter((el) => {
            return el.title === e.target.value;
          })
        }
        setData(x);
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
                      <select onChange={handleFilter}>
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
                products.map(carditem)
              
              )}
              </div>
            </div>
           
        </>
      );
}
