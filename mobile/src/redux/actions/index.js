import axios from "axios"
export const GET_DATA = 'GET_DATA'
export const GET_PROD_DETAILS = 'GET_PROD_DETAILS'
export const LOADING="LOADING"
export const FILTERPRODUCTS = "FILTERPRODUCTS"

export const filterstate = (products) => {
    dispatch({
        type: "FILTER",
        payload: products


    })
}


export const filterproducts = (payload) => {
    return {
        type: FILTERPRODUCTS,
         payload
    }
}
    




export const filterProducts = (cat) => (dispatch) => {

    dispatch(filterproducts(cat))
}

//Products
export const getProduct=(payload)=>({
    type: GET_DATA,
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

export const laptops_api=()=>(dispatch)=>{

    dispatch(loading())
    axios.get('https://backend1242.herokuapp.com/laptops').then((res)=>{

        dispatch(getProduct(res.data))
})

}
export const ipads_api=()=>(dispatch)=>{

    dispatch(loading())
    axios.get('https://backend1242.herokuapp.com/ipads').then((res)=>{

        dispatch(getProduct(res.data))
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