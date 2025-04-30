// \\\\\\\\\\\\\\\increment /decrement   program \(counterslice.jsx),(store.jsx),(main.jsx,app.jsx)\\\\\\\\\\\\\\\\\\\\\\\\
//  import { useSelector,useDispatch } from "react-redux";
//  import { increment,decrement } from "./counterslice";
//  const App=()=>{
//   const mydata=useSelector(state=>state.mycounter.count)
//   const dispatch=useDispatch();
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button onClick={()=>{dispatch(increment())}}>increment</button>
//     <h1>{mydata}</h1>
//     <button onClick={()=>{dispatch(decrement())}} >decrement</button>

//     </>
//   )
// }
// export default App;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\( name change)\(nameslice.jsx),(store.jsx),(main.jsx)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import { useDispatch, useSelector } from "react-redux";
// import { changeName } from "./nameslice";
// const App=()=>{
//   const username=useSelector(state=>state.myname.user);
//   const dispatch=useDispatch();
//   return(
//     <>
//     <h1>welcome:{username}</h1>
//     <button onClick={()=>{dispatch(changeName())}}>change name</button>
//     </>
//   )
// }
// export default App;
// \\\\\\\\\\\\\\\\\\\\\\( pay load )\\(color change)\\(app.jsx,colorslice.jsx,store.jsx)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//  import { useDispatch, useSelector } from "react-redux";
//  import {changecolor} from "./colorslice";
//  import { useState } from "react";
// const App=()=>{
//     const myclr=useSelector(state=>state.mycolor.color);
//     const dispatch=useDispatch();

//     const [val,setVal]=useState("");
//     return(
//       <>
//       <h1>my change color program</h1>
//       <h1>enter color:<input type="text" value={val}
//       onChange={(e)=>{setVal(e.target.value)}}/></h1>
//       <button onClick={()=>{dispatch(changecolor(val))}}>change name</button>
//       <hr/>
//       <div style={{width:"300px",height:"300px",border:"2px solid black",backgroundColor:myclr}}>

//       </div>
//       </>
//     )
//   }
//   export default App;
  // \\\\\\\\\\\\\\\\\\\\\\( pay load )\\(addtask)\\(app.jsx,todoslice.jsx,store.jsx)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  import { useDispatch, useSelector } from "react-redux";
 import {addtask} from "./todoslice";
 import { useState } from "react";
const App=()=>{
    const work=useSelector(state=>state.todo.task);
    const dispatch=useDispatch();

    const [val,setVal]=useState("");
    console.log(work);
    let sno=0;
    const ans=work.map((key)=>{
      sno++;
      return(
        <>
        <tr>
          <td>{sno}</td>
          <td>{key.task}</td>
        </tr>
        </>
      )
    })
    
    return(
      <>
      <h1>todo program</h1>
      <h1>enter work:<input type="text" value={val}
      onChange={(e)=>{setVal(e.target.value)}}/></h1>
      <button onClick={()=>{dispatch(addtask({task:val}))}}>add</button>
      <hr/>
    <table>
      <tr>
        <th>#</th>
        <th></th>
      </tr>
      {ans}
    </table>
      </>
    )
  }
  export default App;
