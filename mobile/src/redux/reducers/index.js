import {addItems, reducer ,laptop,ipad,cartReducer} from "./addItem";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    item:addItems, reduce:reducer ,laptops:laptop,ipads:ipad,cartdata:cartReducer
})


export default rootReducers;