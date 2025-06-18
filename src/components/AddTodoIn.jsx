import React from 'react'
import { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import {useDispatch} from 'react-redux'
import { addTodo } from '../fearures/todo/todoslice';

function AddTodoIn() {
    const [addicon, setaddicon] = useState(true);


    const [input, setinput] = useState("")
    const dispatch = useDispatch()

    const addtodohandler = (e) => {
      e.preventDefault();

      dispatch(addTodo({text: input}))
      setinput("");
    }
  return (
    <>
          <div className="addform h-[70%] w-[30%] flex justify-between items-center px-4 bg-transparent">
            <form onSubmit={addtodohandler} className="h-full w-full border-b flex justify-between items-center px-5 border-[#00ffff]">
              <input type="text" placeholder="Enter Your Task Here:" value={input} onChange={(e) => setinput(e.target.value)}
              className="h-full w-[90%] text-[#00ffff] font-mono placeholder:font-mono bg-transparent outline-none  placeholder:text-[#00ffff] flex justify-center items-center"></input>
              <button className="mouseicon transition-transform duration-300 ease-in-out transform hover:scale-110" onMouseEnter={() => setaddicon(false)} onMouseLeave={() => setaddicon(true)}>
                {addicon ? 
                <IoMdAddCircleOutline className="text-[#00ffff] text-2xl cursor-pointer transition-all duration-300 ease-in-out"/> :
                <IoAddCircle className="text-[#00ffff] text-2xl cursor-pointer transition-all duration-300 ease-in-out" />}
              </button>
              
            </form>

          </div>
    </>
  )
}

export default AddTodoIn
