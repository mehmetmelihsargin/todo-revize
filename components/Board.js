'use client'
import React, { useState, useContext, useEffect } from 'react'
import Modal from './Modal'
import Pin from '../public/pin.js'
import AddTask from '../public/addTask.js'
import Arrow from '../public/arrow.js'
import { Context } from '../context/Context'
import TodoItem from './TodoItem'

function Board() {
    const { todoList, pinnedList, setTodoList, setPinnedList } = useContext(Context);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const todoListFromLocalStorage = localStorage.getItem('todoList');
        if (todoListFromLocalStorage) {
            setTodoList(JSON.parse(todoListFromLocalStorage));
            setPinnedList(JSON.parse(todoListFromLocalStorage).find((item) => item.pinned === true))
        }
    }, [setTodoList, setPinnedList]);


    return (
        <div className="flex flex-col h-5/6 w-11/12 rounded-[8px] bg-white">
            <div className="flex h-auto flex-col justify-center items-center border-b text-blue-800 font-semibold ">
                <h1 className="p-3">To Do List</h1>
                <span className="w-[159px] bg-orange-400"></span>
            </div>
            <div className="h-5/6 flex items-center flex-col">
                <div className="h-4/5 w-11/12">
                    <div className="h-full flex flex-col">
                        <div className="h-auto min-h-[30%]  border-b border-gray-300 flex flex-col justify-around">
                            <div className="flex items-center p-2">
                                <Pin color={'#FF7964'} />
                                <h2 className="ml-2 text-[#FF7964] text-[14px]">
                                    Pin on the top
                                </h2>
                            </div>
                            <div className="h-auto max-h-[83%] ">
                                <ul className="flex flex-col w-full space-y-4 p-2" >
                                    {
                                        pinnedList?.map((item) => item.pinned === true ?

                                            <TodoItem isOpen={isOpen} setOpen={setOpen} item={item} key={item.id} /> : null

                                        )
                                    }

                                </ul>

                            </div>


                        </div>
                        <div className="h-auto max-h-[83%] ">
                            <ul className="flex flex-col w-full p-2 space-y-4" >
                                {
                                    todoList?.map((item) => item.pinned === false ?

                                        <TodoItem isOpen={isOpen} setOpen={setOpen} item={item} key={item.id} /> : null

                                    )
                                }

                            </ul>

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
                            <AddTask color={'white'} />
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
