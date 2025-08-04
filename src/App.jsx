import React from 'react'
import "./global.css"
import Navbar from "./Navbar"
import Form from './Form'
import DisplayNotes from './DisplayNotes'
import TaskProvider from './TaskProvider'

const App = () => {
  return (
   <>
  
   <Navbar/>
 <TaskProvider>
 <main className="maincontainer">
    <Form/>
    <DisplayNotes/>
   </main>
 </TaskProvider>
   </>
  )
}

export default App