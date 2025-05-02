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

//   import { useDispatch, useSelector } from "react-redux";
//  import {addtask} from "./todoslice";
//  import { useState } from "react";
// const App=()=>{
//     const work=useSelector(state=>state.todo.task);
//     const dispatch=useDispatch();

//     const [val,setVal]=useState("");
//     console.log(work);
//     let sno=0;
//     const ans=work.map((key)=>{
//       sno++;
//       return(
//         <>
//         <tr>
//           <td>{sno}</td>
//           <td>{key.task}</td>
//         </tr>
//         </>
//       )
//     })
    
//     return(
//       <>
//       <h1>todo program</h1>
//       <h1>enter work:<input type="text" value={val}
//       onChange={(e)=>{setVal(e.target.value)}}/></h1>
//       <button onClick={()=>{dispatch(addtask({task:val}))}}>add</button>
//       <hr/>
//     <table border="5px" width="300px" >
//       <tr>
//         <th>s.no</th>
//         <th>data</th>
//       </tr>
//       {ans}
//     </table>
//       </>
//     )
//   }
//   export default App;
// \\\\\\\\\\\\\\\\\(delete,del)\\\\(todo app)\\(app.jsx,todoslice.jsx,store.jsx,main.jsx)\\\\\\\\\\\\\\

// import { useDispatch, useSelector } from "react-redux";
// import {addtask ,removetask ,  remByIndex} from "./todoslice";
// import { useState } from "react";
// const App=()=>{
//    const data=useSelector(state=>state.todo.task);
//    const dispatch=useDispatch();

//    const [val,setVal]=useState("");
//    console.log(data);
//    let sno=0;
//    const ans=data.map((key,index)=>{
//      sno++;
//      return(
//        <>
//        <tr>
//          <td>{sno}</td>
//          <td>{key.work}</td>
//          <td><button onClick={()=>{dispatch(removetask({id:key.id}))}}>delete</button></td>
//          <td><button onClick={()=>{dispatch( remByIndex({id:index}))}}>del</button></td>

//        </tr>
    
//        </>
//      )
//    })
   
//    return(
//      <>
//      <h1>todo program</h1>
//      <h1>enter your task:<input type="text" value={val}
//      onChange={(e)=>{setVal(e.target.value)}}/></h1>
//      <button onClick={()=>{dispatch(addtask({id:Date.now(),work:val}))}}>add</button>
//      <hr/>
//    <table border="2" width="200px">
//      <tr>
//        <th>s.no</th>
//        <th>your work</th>
//        <th>delete</th>
//        <th>del</th>
//      </tr>
//      {ans}
//    </table>
//      </>
//    )
//  }
//  export default App;
// \\\\\\\\\\\\\\\\\(delete,complete,incomplete,edit)\\\\(todo app)\\(app.jsx,todoslice.jsx,store.jsx,main.jsx)\\\\\\\\\\\\\\

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTask,RemoveTask,taskComplete,taskInComplete,myEditSave,} from"./todoslice";
function App() {
  const [txtVal, setTxtVal] = useState("");
  const [btnStatus, setbtnStatus] = useState(true);
  const [myid, setMyid] = useState("");
  const Data = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  console.log(Data);

  const dataEdit = (id, work) => {
    setTxtVal(work);
    setbtnStatus(false);
    setMyid(id);
  };

  const myEditData = () => {
    dispatch(myEditSave({ id: myid, work: txtVal }));
    setbtnStatus(true);
  };

  let sno = 0;
  const ans = Data.map((key) => {
    sno++;
    return (
      <>
        <tr>
          <td> {sno} </td>
          <td>
            {key.taskStatus ? (
              <>
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  {key.work}
                </span>
              </>
            ) : (
              <>{key.work} </>
            )}
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(RemoveTask({ id: key.id }));
              }}
            >
              Del
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(taskComplete({ id: key.id }));
              }}
            >
              Complete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(taskInComplete({ id: key.id }));
              }}
            >
              InComplete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dataEdit(key.id, key.work);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1> ToDo App </h1>
      Enter Your Task{" "}
      <input
        type="text"
        value={txtVal}
        onChange={(e) => {
          setTxtVal(e.target.value);
        }}
      />
      {btnStatus ? (
        <>
          <button
            onClick={() => {
              dispatch(
                addTask({ id: Date.now(), work: txtVal, taskStatus: false })
              );
            }}
          >
            Add
          </button>
        </>
      ) : (
        <>
          <button onClick={myEditData}>Edit Save</button>
        </>
      )}
      <hr />
      <table>
        <tr>
          <th> Sno</th>
          <th> Your Work </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th></th>
        </tr>
        {ans}
      </table>
    </>
  );
}

export default App;
