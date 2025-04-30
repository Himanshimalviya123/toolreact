// \\\\\\\\\\\\\\\increment /decrement   program \(counterslice.jsx),(store.jsx),(main.jsx,app.jsx)\\\\\\\\\\\\\\\\\\\\\\\\

// import { configureStore } from "@reduxjs/toolkit";
// import  myReducer from "./counterslice";
// const Store=configureStore({
//     reducer:{
//         //your reducer goes here
//         mycounter:myReducer

//     }
// })
// export default Store;
// \\\\\\\\\\\\\\\\\\\\\\\\\\( name change)\\\(nameslice.jsx),(store.jsx),(main.jsx,app.jsx)\\\\\\\\\\\\\\\\\\\\\\
// import { configureStore } from "@reduxjs/toolkit";
// import nameReducer from "./nameslice";
// const Store=configureStore({
//     reducer:{
//         //your reducer goes here
//         myname:nameReducer

//     }
// })
// export default Store;
// \\\\\\\\\\\\\\\\\\\\\(payload)\(color change)\\(app.jsx,colorslice.jsx,store.jsx)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import { configureStore } from "@reduxjs/toolkit";
// import colorreducer from "./colorslice";
// const Store=configureStore({
//     reducer:{
//         //your reducer goes here
//   mycolor:colorreducer

//     }
// })
// export default Store;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoslice";
const Store=configureStore({
    reducer:{
        //your reducer goes here
    todo:todoreducer

    }
})
export default Store;