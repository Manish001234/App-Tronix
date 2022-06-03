import axios from "axios"
export const GET_DATA = 'GET_DATA'
export const GET_DATA_IPAD = 'GET_DATA_IPAD'
export const GET_DATA_LAPTOP = 'GET_DATA_LAPTOP'
export const GET_PROD_DETAILS = 'GET_PROD_DETAILS'
export const LOADING="LOADING"
export const CART_MOBILE = "CART_MOBILE"
export const LOGIN ="LOGIN"
export const SIGNUP ="SIGNUP"



//Products
export const getProduct=(payload)=>({
    type: GET_DATA,
    payload
    })

export const getProductlaptop=(payload)=>({
    type: GET_DATA_LAPTOP,
    payload
    })

export const getProductipad=(payload)=>({
    type: GET_DATA_IPAD,
    payload
    })
    export const cartmobile=(payload)=>({
        type: CART_MOBILE,
        payload
        })
    
export const getProductDetails=(payload)=>({
type: GET_PROD_DETAILS,
payload
})

//Cart

export const addItem =(data)=>{
    return{
        type:"ADDITEM",
        payload:data
    }
}
export const delItem=(data)=>{
    return{
        type:"DELITEM",
        payload:data
    }
}
export const updateadd = (data) => {
    return {
        type:"UPDATEADD",
        payload:data
    }
}

export const deletecart = (data) => {
    return {
        type: "DELETECART",
        payload:data
    }
}

//LOGIN
export const loginRequest = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const signupRequest = (user) => {
    return {
        type: SIGNUP,
        payload: user
    }
}

//Increment decrement
export const updateaddd = (cartItem,state,value) => (dispatch) => {
    let x = state.map((e) => {
        if(e.id === cartItem.id){
            if(e.quantity === 1 && value === -1){
                e.quantity = e.quantity;
            }
            else{
                e.quantity = e.quantity+value;
            }
        }
    })
    dispatch(updateadd(x))
}
export const loading =()=>{
    return{
        type:LOADING
    }
}


//Products api
export const mobiles_api=()=>(dispatch)=>{

    dispatch(loading())
    axios.get('https://backend1242.herokuapp.com/mobiles').then((res)=>{

        dispatch(getProduct(res.data))
})

}
export const get_cart_data=()=>(dispatch)=>{
 
    dispatch(loading())
    axios.get('https://backend1242.herokuapp.com/mobilecart').then((res)=>{
         console.log("cart",res.data)
        dispatch(cartmobile(res.data))
})

}


export const laptops_api=()=>(dispatch)=>{

    dispatch(loading())
    axios.get('https://backend1242.herokuapp.com/laptops').then((res)=>{

        dispatch(getProductlaptop(res.data))
})

}
export const ipads_api=()=>(dispatch)=>{

    dispatch(loading())
    axios.get('https://backend1242.herokuapp.com/ipads').then((res)=>{

        dispatch(getProductipad(res.data))
})

}

//SingleProduct Api

export const mobile_id = (id) => (dispatch) => {
    axios.get(`https://backend1242.herokuapp.com/mobiles/${id}`).then((res) => {
        dispatch(getProductDetails(res.data))
    })

}
export const laptop_id = (id) => (dispatch) => {
    axios.get(`https://backend1242.herokuapp.com/laptops/${id}`).then((res) => {
        dispatch(getProductDetails(res.data))
    })

}
export const ipad_id = (id) => (dispatch) => {
    axios.get(`https://backend1242.herokuapp.com/ipads/${id}`).then((res) => {
        dispatch(getProductDetails(res.data))
    })

}