// import { useRef,useState } from "react";
// import Data from "./Data";
// function App(){
//   const [taskList,setTaskList]= useState(Data);
//   const [defaultStatus,setDefaultStatus]=useState("Active");
//   const [priorityList,setpriorityList]=useState([{priorityid:1,priorityValue:"High"},{priorityid:2,priorityValue:"Medium"},{priorityid:3,priorityValue:"Low"}])

//   let titleInput=useRef();
//   let priorityInput= useRef();

//   const changetaskStatus= (status,title)=>{
//     let index= taskList.findIndex((task)=>{return task.title==title});
//     let task= taskList[index];
//     task.status=(status=="Active") ? "Active" :"Deactive";
//     taskList.splice(index,1);
//     taskList.splice(index,0,task);
//     setTaskList([...taskList  ]);
//   }
//   const addnewTask=()=>{
//     const title= titleInput.current.value;
//     let pid= priorityInput.current.value;
//     let status="Active";
//     let date= new Date();
//     date= date.getDate()+"/" +(date.getMonth()+1)+"/"+date.getFullYear();
//     let newTask={title,pid,status,date};
//     setTaskList([...taskList,newTask]);
//   }
//   return<>
//   <div className="header">
//   <h1 className="bg-dark text-white p-2 text-center">ToDo App</h1>
//   </div>
//   <div className="container mt-3">
//     <div className="row">
//       <div className="col-md-6">
//         <input ref={titleInput} type="text" className="form-control" placeholder="Enter Task Tilte"/>
//       </div>
//       <div className="col-md-6">
//       <select  ref={priorityInput} className="form-control">
//         {priorityList.map((obj,index)=><option key={index} value={obj.priorityid}>{obj.priorityValue}</option>)}
//       </select>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-6">
//         <button onClick= {addnewTask} className="btn btn-warning mt-3">ADD</button>
//       </div>
//     </div>
//   </div>
//   <div className="container mt-3">
//     <div>
//     <button onClick={()=>setDefaultStatus("Active")} disabled={defaultStatus == "Active" ? true : false} className="btn btn-success">Active ({taskList.filter((task)=>{return task.status == "Active"}).length})</button>      
//     <button onClick={()=>setDefaultStatus("Active")} disabled={defaultStatus == "Dective" ? true : false} className="btn btn-danger ms-2">Dective ({taskList.filter((task)=>{return task.status == "Deactive"}).length})</button>      
//     </div>
//     <table className="table">
//       <thread>
//         <tr>
//           <th>S.No</th>
//           <th>Tilte</th>
//           <th>Date</th>
//           <th>Priority</th>
//           <th>Update status</th>
//         </tr>
//       </thread>
//       <tbody>
//         {taskList.filter((task)=>task.status==defaultStatus).sort((a,b)=>{ return a.pid-b.pid}).map((task,index)=><tr key={index}className={task.pid==1 ? "bg-danger" : task.pid==2 ? "bg-orange" :"bg-green"}>
//           <td>{index+1}</td>
//           <td>{task.title}</td>
//           <td>{task.date}</td>
//           <td>{priorityList.find((obj)=>{return obj.priorityid==task.obj}).priorityValue}</td>
//           <td>
//             <button onClick={()=>changetaskStatus(task.status,task.title)} className="btn btn-secondray">{task.status=="Active"? "Deactive":"Active"}</button>
//           </td>
//         </tr>)}
//       </tbody>
//     </table>
//   </div>
//   </>
// }
// export default App;
import { useRef, useState } from "react";
import Data from "./Data";
function App(){
   const [taskList,setTaskList] = useState(Data);
   const [defaultStatus,setDefaultStatus] = useState("Active");
   const [priorityList,setPriorityList] = useState([{priorityId:1, priorityValue:"High"},{priorityId:2, priorityValue:"Medium"},{priorityId:3, priorityValue:"Low"}])
   
   let titleInput = useRef();
   let priorityInput = useRef();

   const changeTaskStatus = (status,title)=>{
     let index =  taskList.findIndex((task)=>{return task.title == title});
     let task = taskList[index];
     task.status = (status == "Active") ? "Deactive" : "Active";
     taskList.splice(index,1);
     taskList.splice(index,0,task);
     setTaskList([...taskList]);
   }
   const addNewTask = ()=>{
     const title = titleInput.current.value;
     let pid = priorityInput.current.value;
     let status = "Active";
     let date = new Date();
     date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
     let newTask = {title,pid,status,date};
     setTaskList([...taskList,newTask]); 
    }
   return <>
      <div className="header">
        <h1 className="bg-dark text-white p-2 text-center">ToDo App</h1>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={titleInput} type="text" className="form-control" placeholder="Enter your Task"/>
          </div>
          <div className="col-md-6">
            <select ref={priorityInput} className="form-control" type="text" placeholder="Set Priority">
              {priorityList.map((obj,index)=><option key={index} value={obj.priorityId}>{obj.priorityValue}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={addNewTask} className="btn btn-warning mt-3">ADD</button>
          </div>
        </div>
        <div className='container mt-3 pl-2'>
          <button onClick={()=>setDefaultStatus("Active")} disabled={defaultStatus == "Active" ? true : false} className="btn btn-success mr-5">Deactive({taskList.filter((task)=>{return task.status == "Active"}).length})</button>
          <button onClick={()=>setDefaultStatus("Deactive")} disabled={defaultStatus == "Deactive" ? true : false} className="btn btn-danger mr-5">Active ({taskList.filter((task)=>{return task.status == "Deactive"}).length})</button>    
          <button onClick={()=>setDefaultStatus("Delete")} disabled={defaultStatus == "Delete" ? true : false} className="btn btn-primary ">Delete Task({taskList.filter((task)=>{return task.status == "Delete"}).length})</button>    
      </div>
      </div>
     
        <table className="table border-2 mt-3">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Update status</th>
            </tr>
          </thead>
          <tbody>
            {taskList.filter((task)=>task.status==defaultStatus).sort((a,b)=>{return a.pid-b.pid}).map((task,index)=><tr key={index} className={task.pid==1 ? "bg-danger" : task.pid==2 ? "bg-orange" : "bg-green"}>
              <td>{index+1}</td>
              <td>{task.title}</td>
              <td>{task.date}</td>
              <td>{priorityList.find((obj)=>{return obj.priorityId==task.pid}).priorityValue}</td>
              <td>
                <button onClick={()=>changeTaskStatus(task.status,task.title)} className="btn btn-secondary">{task.status=="Active" ? "Deactive" : "Active"}</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      {/* </div> */}
   </> 
}
export default App;