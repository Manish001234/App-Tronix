import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Ipad = () => {
    const [data, setData]=useState([])
    const [filtering,setFiltering]=useState([])
    const [load , setLoad] = useState(null)
    const getData=()=>{
        axios.get('https://backend1242.herokuapp.com/Ipads').then((res)=>{
          console.log(res.data)
            setData(res.data)
            setFiltering(res.data)
            setLoad(res.data)
        })
    }
    useEffect(()=>{
        getData();
    },[])
  
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
                <h1>Ipad</h1>
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
                load?
                data.map(carditem)
                :<h2 className="load">Loading...</h2> 
              }
              </div>
            </div>
      
        </>
      );
}

export default Ipad