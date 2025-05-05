import { createContext, useState ,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';


export const TaskContextApi=createContext();
 /// t get data from localstorage
 let getLocalItems=()=>{
  let lists = localStorage.getItem("lists")
  if(lists){
    return JSON.parse(lists)
  }else{
    return []
  }
 }


const TaskProvider = (props) => {

 let [state , setState]=useState({
    title:"",
    description:"",
    category:""
 })
let [task , setTask]=useState(getLocalItems())
let addTask=(title , description , category)=>{
    setTask([...task,{title,description,category,id:uuidv4()}])
}

useEffect(() => {
  
  localStorage.setItem("lists",JSON.stringify(task))
}, [task]);

let [selective,setSelective]=useState({
  selectedCategory:"all"
})
let handleCategory=(e)=>{
let {name,value}=e.target
setSelective({[name]:value})
setTask(task)
}
let handleDelete=(id)=>{
  let filteredItem=task.filter(item=> item.id!=id)
  setTask(filteredItem)
}
let handleUpdate=(id)=>{
  let filteredItem=task.filter(item=> item.id!=id)
  let editNote=task.find(item=>item.id==id)
  setTask(filteredItem)
  setState(editNote)
}


  return (
   <TaskContextApi.Provider value={{state,setState,task,addTask,handleCategory,selective,handleUpdate,handleDelete}}>
    {props.children}
   </TaskContextApi.Provider>
  )
}

export default TaskProvider