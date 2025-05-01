  // \\\\\\\\\\\\\\\\\\\\\\( pay load )\\(addtask)\\(app.jsx,todoslice.jsx,store.jsx)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import { createSlice } from "@reduxjs/toolkit";
// const todoslice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addtask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload)
            
//         }
//     }
// })
// export const  {addtask}=todoslice.actions;
// export default todoslice.reducer;
// \\\\\\\\\\\\\\\\\\\\(todo app)\\\\\(app.jsx,todoslice.jsx,store.jsx,main.jsx)\\\\\\\\\\\
import { createSlice } from "@reduxjs/toolkit";
const todoslice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            console.log(actions);
            state.task.push(actions.payload)
            
        },
        removetask:(state,actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload.id)
        },
        remByIndex:(state,actions)=>{
            state.task.splice(actions.payload.id,1);
            console.log(actions.payload.id);
            
        }
    }
})
export const  {addtask,removetask, remByIndex}=todoslice.actions;
export default todoslice.reducer;