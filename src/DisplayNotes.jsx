
import React,{ useContext } from 'react'
import { TaskContextApi } from './TaskProvider'

const DisplayNotes = () => {
  let data=useContext(TaskContextApi)
  console.log(data);
  let {task,handleCategory,selective,handleUpdate,handleDelete}=data
  let {selectedCategory}=selective
  console.log(selectedCategory);
  
  return (
  <main className="displaySection">
    <section className="selectedNotes">
      <div className="selectDisplayBlock" value={selectedCategory} onChange={handleCategory}>
        <label>select a Category</label>
        <input type="radio" name='selectedCategory' value="all"/><span>all</span>
        <input type="radio" name='selectedCategory' value="General"/><span>General</span>
        <input type="radio" name='selectedCategory' value="official"/><span>official</span>
        <input type="radio" name='selectedCategory' value="technical"/><span>technical</span>
      </div>

      <section className="displayBlock">
        <div className="displayNotes">
          {
            task.length ==0 ? "loading...": task.map((value)=>{
              return selectedCategory == "all" ?(
                <div className="output" key={value.id}>
                  <h1>Title:{value.title}</h1>
                  <p>Description:{value.description}</p>
                  <p>Category:{value.category}</p>
                  <div className="btn">
                    <button onClick={()=>handleUpdate(value.id)}>Update</button>
                    <button onClick={()=>handleDelete(value.id)}>Delete</button>
                  </div>

                </div>
              ) :(
                selectedCategory ==value.category && (
                  <div className="output" key={value.id}>
                  <h1>Title:{value.title}</h1>
                  <p>Description:{value.description}</p>
                  <p>Category:{value.category}</p>
                  <div className="btn">
                    <button onClick={()=>handleUpdate(value.id)}>Update</button>
                    <button onClick={()=>handleDelete(value.id)}>Delete</button>
                  </div>
                  </div>
                )
              )
            })
          }
        </div>
      </section>
    </section>
  </main>
  )
}

export default DisplayNotes