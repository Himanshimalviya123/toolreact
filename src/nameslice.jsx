
// \\\\\\\\\\\\\\\\\\\\( name change)\\\\\\\\\\\\\\\\\\\\\\\

import { createSlice } from "@reduxjs/toolkit";
const nameslice=createSlice({
    name:"myname",
    initialState:{
        user:"sakshi"
    },
    reducers:{
        changeName:(state)=>{
            state.user="himanshi";
        }
    }
})

export const {changeName}=nameslice.actions;
export default nameslice.reducer;
// \\\\\\\\\\\\\\\\\\\\\\\( pay load )\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
