'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Modal from './Modal'
import Pin from '../public/pin.js'
import AddTask from '../public/addTask.js'
import Arrow from '../public/arrow.js'

function Board() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex flex-col h-5/6 w-11/12 rounded-[8px] bg-white">
            <div className="flex h-auto flex-col justify-center items-center border-b text-blue-800 font-semibold ">
                <h1 className="p-3">To Do List</h1>
                <span className="w-[159px] bg-orange-400"></span>
            </div>
            <div className="h-5/6 flex items-center flex-col">
                <div className="h-4/5  w-[311px]">
                    <div className="h-full flex flex-col">
                        <div className="h-auto min-h-[17%] border-b-2 flex flex-col justify-around">
                            <div className="flex items-center p-2">
                                <Pin color={'#FF7964'} />
                                <h2 className="ml-2 text-[#FF7964] text-[14px]">
                                    Pin on the top
                                </h2>
                            </div>
                            {/* <div className="flex w-full p-2" >
                                <TodoItem />
                            </div> */}


                        </div>
                        <div className="h-auto max-h-[83%] ">
                            <div className="flex w-full p-2" >
                                <TodoItem />
                            </div>
                            <div className="flex w-full p-2" >
                                <TodoItem />
                            </div>
                            <div className="flex w-full p-2" >
                                <TodoItem />
                            </div>
                            <div className="flex w-full p-2" >
                                <TodoItem />
                            </div>
                            <div className="flex w-full p-2" >
                                <TodoItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center h-1/6'>
                <button
                    onClick={() => setOpen(true)}
                    className=" h-4/6 w-11/12 text-white bg-[#21A7F9] flex justify-between items-center font-normal text-[18px] rounded-[4px]"
                >
                    <div className="flex h-full items-center w-3/5 justify-evenly ">
                        <span className='text-white' >
                            <AddTask />
                        </span>
                        Add a Task
                    </div>
                    <div className="flex items-center w-1/5 justify-center">
                        <span>
                            <Arrow />
                        </span>
                    </div>
                </button>
            </div>
            <Modal isOpen={isOpen} setOpen={setOpen} />
        </div>
    )
}

export default Board
