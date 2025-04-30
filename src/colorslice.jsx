// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\(payload)\\\\\\\\(color change)\\(app.jsx,colorslice.jsx,store.jsx)
import { createSlice } from "@reduxjs/toolkit";
const colorslice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changecolor:(state,actions)=>{
            console.log(actions.payload);
            
            state.color=actions.payload;
        }
    }
})
export const  {changecolor}=colorslice.actions;
export default colorslice.reducer;