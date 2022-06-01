import { GET_DATA,LOADING } from "../actions/index";
import { GET_PROD_DETAILS } from "../actions/index";
import { FILTERPRODUCTS } from "../actions/index";
const initialState={
    products:[]  ,
    product:{},
    loading:false,
    filters:""

  }

  export const reducer=(state=initialState,{type,payload})=>{
      console.log(state)
    switch(type){
        case GET_DATA:
            return {...state,products:payload,loading:false};
            case LOADING:
                return {...state,loading:true};
        
            case GET_PROD_DETAILS:
            return {...state,product:payload};
    
            case FILTERPRODUCTS:
                return { ...state,  filters:payload }

            
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
