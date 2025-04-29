// \\\\\\\\\\\\\\\increment /decrement   program \\\\\\\\\\\\\\\\\\\\\\\\\
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
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\( name change)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./nameslice";
const App=()=>{
  const username=useSelector(state=>state.myname.user);
  const dispatch=useDispatch();
  return(
    <>
    <h1>welcome:{username}</h1>
    <button onClick={()=>{dispatch(changeName())}}>change name</button>
    </>
  )
}
export default App;
// \\\\\\\\\\\\\\\\\\\\\\( pay load )\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\