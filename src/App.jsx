import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-purple-300 py-5">
        ToDo App
      </h1>
      <AddTodo />
      <Todos />
    </>
  )
}