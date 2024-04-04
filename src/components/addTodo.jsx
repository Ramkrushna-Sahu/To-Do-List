import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
      <form onSubmit={addTodoHandler} className=' md:mt-5 mt-3 px-2'>
        <div className='flex flex-row justify-center'>
        <input 
            type="text" 
            className='bg-gray-800 md:w-[40%] w-[75%] rounded-tr-none rounded-br-none rounded-tl rounded-bl border-t border-b border-l border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Enter a Todo...'
            value={input}
            onChange={e=> setInput(e.target.value)}
        />
        <button type="submit" className='text-white bg-purple-500 border-0 py-[7px] md:px-6 px-3 focus:outline-none hover:bg-purple-600 rounded-tr rounded-br rounded-tl-none rounded-bl-none md:text-lg text-sm'>Add Todo</button>
        </div>
      </form>
    </>
  )
}

export default AddTodo
