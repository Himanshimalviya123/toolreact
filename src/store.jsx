import { configureStore } from "@reduxjs/toolkit";
import  myReducer from "./counterslice";
const Store=configureStore({
    reducer:{
        //your reducer goes here
        mycounter:myReducer

    }
})
export default Store;