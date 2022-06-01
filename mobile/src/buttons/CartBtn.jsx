import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
const CartBtn=()=>{
     const state = useSelector((store)=>store.item)
     console.log(state)
    return (
        <div>
              <Link  to="/cart" className="btn btn-outline-primary ms-2">
                 <span className="fa fa-shopping-cart me-1"></span>Cart : ({state.length})
                </Link>
        </div>
    )
}
export default CartBtn;