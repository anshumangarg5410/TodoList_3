import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { MdModeEditOutline } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function Item() {
  return (
    <>
        <div className="task rounded-md h-[50px] w-[100%] bg-[#111111] border border-[#00ffff] shadow-[0_0_6px_#00ffff] text-[#00ffff] px-4 py-2 flex items-center justify-between">
          <div className="text flex justify-start items-center font-semibold w-[90%] h-full">
            <IoCheckmarkDoneCircleOutline className="text-[#00ffff] text-3xl cursor-pointer"/>
            <IoCheckmarkDoneCircle className="text-[#00ffff] text-3xl cursor-pointer"/>
            <p className='ml-4'> Text here</p>
            
            
            </div>
          <div className="menu flex justify-evenly w-[10%] items-center h-full ">
            <MdModeEditOutline className='text-2xl hover:text-red-500 cursor-pointer transition-colors' />
            <RiEdit2Fill  className='text-2xl hover:text-red-500 cursor-pointer transition-colors'  />
            <FiTrash2 className="text-[#00ffff] text-xl cursor-pointer hover:text-red-500 transition-colors"/>
          </div>
        </div>
        
    </>
  )
}

export default Item
