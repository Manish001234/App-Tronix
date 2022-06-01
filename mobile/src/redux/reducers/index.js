import {addItems, reducer} from "./addItem";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    item:addItems, reduce:reducer
})


export default rootReducers;