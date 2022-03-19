import { combineReducers } from "redux";
import phonesReducer from "./phonesReducer";
import { specsReducer } from "./specsReducer";


export const rootReducer = combineReducers({
    phones: phonesReducer,
    specs: specsReducer
})