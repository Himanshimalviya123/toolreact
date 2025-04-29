// \\\\\\\\\\\\\\\increment /decrement   program \\\\\\\\\\\\\\\\\\\\\\\\\

// import { configureStore } from "@reduxjs/toolkit";
// import  myReducer from "./counterslice";
// const Store=configureStore({
//     reducer:{
//         //your reducer goes here
//         mycounter:myReducer

//     }
// })
// export default Store;
// \\\\\\\\\\\\\\\\\\\\\\\\\\( name change)\\\\\\\\\\\\\\\\\\\\\\\\\
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameslice";
const Store=configureStore({
    reducer:{
        //your reducer goes here
        myname:nameReducer

    }
})
export default Store;
// \\\\\\\\\\\\\\\\\\\\\(payload)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\