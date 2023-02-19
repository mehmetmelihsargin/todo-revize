import React, { useState } from 'react';
import Box from '../public/box.js'
import CheckedBox from '../public/checkedBox.js';
import Dots from '../public/dots.js';
import TodoItemModal from './TodoItemModal.js';



function TodoItem({ item, isOpen, setOpen }) {
    const [isChecked, setisChecked] = useState(false);
    const [isOpenTodoModal, setIsOpenTodoModal] = useState(false)
    return (
        <div className="w-full flex items-center justify-between">
            <button onClick={() => setisChecked(!isChecked)} className="flex items-center">
                {isChecked ?
                    <CheckedBox /> : <Box />}
            </button>
            <div className="flex items-center capitalize w-4/6 text-[16px]">
                <h2 className="capitalize">{item.input}</h2>

            </div>
            <button onClick={() => setIsOpenTodoModal(true)} className="flex p-2 items-center">
                <Dots />
            </button>
            <TodoItemModal isOpen={isOpen} setOpen={setOpen} item={item} isOpenTodoModal={isOpenTodoModal} setIsOpenTodoModal={setIsOpenTodoModal} />
        </div>
    )
}

export default TodoItem