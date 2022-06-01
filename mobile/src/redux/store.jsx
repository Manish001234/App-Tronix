import { legacy_createStore,applyMiddleware } from "redux";
import rootReducers from "./reducers";

//thunk
const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action ==="function"){
        return action(store.dispatch);
    }

    next(action)
}

const store=legacy_createStore(rootReducers,applyMiddleware(loggerMiddleware));
console.log(store.getState())



export default store