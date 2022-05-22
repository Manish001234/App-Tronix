

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

