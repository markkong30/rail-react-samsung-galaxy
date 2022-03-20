import { combineReducers } from "redux";
import phonesReducer from "./phonesReducer";
import { specsReducer } from "./specsReducer";
import buyReducer from "./buyReducer";


export const rootReducer = combineReducers({
    phones: phonesReducer,
    specs: specsReducer,
    buy: buyReducer,
})