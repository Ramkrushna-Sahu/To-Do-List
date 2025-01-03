import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleComplete, updateTodo } from '../features/todo/todoSlice'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import AddTodo from './addTodo';
const Todos = ({update,setUpdate}) => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    // const [update, setUpdate] = useState(null)
    const handleComplete = (id) => {
        dispatch(toggleComplete(id));
    }
    const handleUpdate = (id,text)=>{
        setUpdate({id, text})
        // console.log(update)
    }
    return (
        <>
            <div className='mt-10'>
                {
                    todos.length === 0 && <p className='md:text-xl text-lg font-semibold text-purple-300 px-3'>Looks like you've got a clear slate! 🎉 No todos to tackle just yet. Take a breather, or add some tasks to get started! 📝</p>
                }
                {
                    todos.length !== 0 &&
                    <>
                        <p className='md:text-xl text-lg font-semibold text-purple-300 px-3'>Your todos are here! 📝 Get ready to conquer your tasks! 💪</p>
                        <div className=''>
                            <ul className='list-none'>
                                {
                                    todos.map((todo) => (
                                        <li key={todo.id} className='xl:w-[70%] md:w-[80%] w-[95%] mx-auto mt-4 flex justify-between items-center bg-zinc-700 px-4 py-2 rounded'>
                                            <div className={todo.completed ? 'text-purple-400 line-through cursor-pointer w-full text-start' : 'text-white cursor-pointer w-full text-start'} onClick={() => handleComplete(todo.id)}>{todo.text}</div>
                                            <button className='text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-md mx-1' onClick={() => handleUpdate(todo.id, todo.text)}><MdOutlineEditNote size={20} /></button>
                                            <button className='text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-700 rounded text-md mx-1' onClick={() => dispatch(removeTodo(todo.id))}><RiDeleteBin6Line size={20} /></button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Todos
