import React,{useContext} from 'react'
import { TaskContextApi } from './TaskProvider'

const Form = () => {

    let data=useContext(TaskContextApi)
    let {state, setState, task, addTask}=data
    let {title,description,category}=state

    let handleChange=(e)=>{
      let {name,value}=e.target 
      setState({...state,[name]:value})
    }
    let handleSubmit=(e)=>{
      e.preventDefault()
      addTask(title,description,category)
      setState({title:'',description:"",category:""})
    }
    console.log(task);
    
  return (
    <main className="formBlock">
        <form onSubmit={handleSubmit}>

            <div className="form-content">
                <label>Title</label>
                <input type="text" placeholder='enter title'name='title' value={title} onChange={handleChange} />
            </div>
            <div className="form-content">
                <label>description</label>
               <textarea cols={50} rows={12} name='description' value={description} onChange={handleChange}></textarea>
            </div>
            <div className="form-content">
                <label>Category</label>
                <select name='category' value={category} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="official">official</option>
                    <option value="technical">technical</option>
                </select>
                
            </div>
            <button>submit</button>
        </form>
    </main>
  )
}

export default Form