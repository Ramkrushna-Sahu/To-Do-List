import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'
import { useState } from 'react'

export default function App() {
  const [update, setUpdate] = useState(null)
  return (
    <>
      <h1 className="text-3xl font-bold text-purple-300 py-5">
        ToDo App
      </h1>
      <AddTodo update={update} setUpdate={setUpdate}/>
      <Todos update={update} setUpdate={setUpdate}/>
    </>
  )
}