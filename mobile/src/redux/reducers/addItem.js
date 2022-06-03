import { GET_DATA,LOADING } from "../actions/index";
import { GET_PROD_DETAILS } from "../actions/index";
import { GET_DATA_IPAD } from "../actions/index";
import { GET_DATA_LAPTOP } from "../actions/index";
import { CART_MOBILE } from "../actions/index";
import { LOGIN } from "../actions/index";
import { SIGNUP } from "../actions/index";

// import { FILTERPRODUCTS } from "../actions/index";
const initialState={
    products:[]  ,
    product:{},
    loading:false,
    filters:"",
    users:[],
    user:null,
    

  }
 
 const cartItem={
     cartdata:[]
 }
  
 
 export const cartReducer=(state=cartItem,{type,payload})=>{

  switch(type){
      case CART_MOBILE:
          return {...state,cartdata:[payload]};

          case LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
          

            case SIGNUP:
                return { "users": payload};


          default:
              return state;
  
  }
  }

  export const reducer=(state=initialState,{type,payload})=>{
      console.log(state,"products")
    switch(type){
        case GET_DATA:
            return {...state,products:payload,loading:false};
           
            case LOADING:
                return {...state,loading:true};
        
            case GET_PROD_DETAILS:
            return {...state,product:payload};
    
          

            
            default:
                return state;
    
    }
    }


    export const laptop=(state=initialState,{type,payload})=>{
        console.log(state,"products")
      switch(type){
        
                  case GET_DATA_LAPTOP:
                      return {...state,products:payload,loading:false};
              case LOADING:
                  return {...state,loading:true};
          
              case GET_PROD_DETAILS:
              return {...state,product:payload};
      
            
  
              
              default:
                  return state;
      
      }
      }

      
    export const ipad=(state=initialState,{type,payload})=>{
        console.log(state,"products")
      switch(type){
             
        case GET_DATA_IPAD:
            return {...state,products:payload,loading:false};
                
              case LOADING:
                  return {...state,loading:true};
          
              case GET_PROD_DETAILS:
              return {...state,product:payload};
      
            
  
              
              default:
                  return state;
      
      }
      }


const addItem=[];
export const addItems = (state=addItem,action)=>{
    switch(action.type){
        case "ADDITEM":
            return [
            ...state,
            action.payload
        ]
        case "UPDATEADD":
                return [...state];
        case "DELETECART":
                return [];
        case 'DELITEM':
            return state=state.filter((x)=>{
                return x.id !== action.payload.id
            })

            default:
                return state;
    }
}
