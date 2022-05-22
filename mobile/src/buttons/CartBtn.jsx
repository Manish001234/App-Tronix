import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
const CartBtn=()=>{
     const state = useSelector((state)=>state.addItems)
    return (
        <div>
              <Link  to="/cart" className="btn btn-outline-primary ms-2">
                 <span className="fa fa-shopping-cart me-1.log(state"></span>Cart : ({state.length})
                </Link>
        </div>
    )
}
export default CartBtn;