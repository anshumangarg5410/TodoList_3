import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { MdModeEditOutline } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { removeTodo , toggleTodo, editTodo} from '../fearures/todo/todoslice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react'




function Item({todo}) {
    const dispatch = useDispatch()
    const [editable, seteditble] = useState(false);
    const [newmsg, setnewmsg] = useState(() => (todo?.text ?? ""));
    
    const completedTodo = (e) => {
      dispatch(toggleTodo(todo))
    }

    const edittTodo = (e) => {
      dispatch(editTodo({id: todo.id, text: newmsg}))
    }

  return (

    <>
        <div className="task rounded-md h-[50px] w-[100%] bg-[#111111] border border-[#00ffff] shadow-[0_0_6px_#00ffff] text-[#00ffff] px-4 py-2 flex items-center justify-between">
          <div className="text flex justify-start items-center font-semibold w-[90%] h-full">
            {!todo.completed == true ? 
            <IoCheckmarkDoneCircleOutline onClick={completedTodo} className="text-[#00ffff] text-3xl cursor-pointer"/> : 
            <IoCheckmarkDoneCircle onClick={completedTodo} className="text-[#00ffff] text-3xl cursor-pointer"/>}
            
            <input type='text' className=
            {`ml-4 outline-none bg-transparent h-full w-full ${todo.completed ? "line-through text-green-600" : ""}`}  value={typeof newmsg === "string" ? newmsg : ""}
            onChange={(e) => setnewmsg(e.target.value)} readOnly = {!editable}
            /> 
            </div>
          <div className="menu flex justify-evenly w-[10%] items-center h-full ">
            {editable == false ? 
            <MdModeEditOutline onClick={() => {if (todo.completed == false) seteditble(!editable)}} className={`text-2xl hover:text-red-500  cursor-pointer transition-colors  `} /> : 
            <RiEdit2Fill onClick={() => {seteditble(!editable) ; edittTodo()}}  className={`text-2xl hover:text-red-500 cursor-pointer transition-colors ${todo.completed == true ? "hidden" : ""}`}  />}
            
            <FiTrash2 onClick={() => dispatch(removeTodo(todo.id))}  className="text-[#00ffff] text-xl cursor-pointer hover:text-red-500 transition-colors"/>
          </div>
        </div>
        
    </>
  )
}

export default Item
