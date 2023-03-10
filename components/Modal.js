import React, { useState, useEffect, useContext } from 'react'
import Sheet from 'react-modal-sheet';
import AddTask from '../public/addTask.js';
import Pin from '../public/pin.js';
import Cross from '@/public/cross.js';
import RadioButtonEmpty from '@/public/radioButtonEmpty.js';
import RadioButtonChecked from '@/public/radioButtonChecked.js';
import { Context } from '../context/Context';
import { uid } from 'uid';

function Modal(props) {
    const { isOpen, setOpen } = props;
    const { addTodoList, dataUpdate, setDataUpdate, updateTodoList } = useContext(Context);
    const [isPinned, setIsPinned] = useState(false);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false);
        if (dataUpdate && inputValue !== '') {
            updateTodoList(dataUpdate.id, inputValue, isPinned)
        } else if (inputValue !== '') {
            addTodoList(inputValue, isPinned, uid(3))
        } else {
            alert('Deger Girmediniz');
        }
        setInputValue('')
        setIsPinned(false)
        setDataUpdate('')
        setIsKeyboardOpen(false)
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }


    return (
        <div>
            <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={[642]}
                initialSnap={0}
            >
                <Sheet.Container>
                    <Sheet.Content>
                        <div className="h-auto min-h-[56px] border-b-2 flex justify-center items-center">
                            <div className="flex w-full ">
                                <div className="flex w-2/3 items-center justify-end  text-[#FF7964]">
                                    <span>
                                        {' '}
                                        <AddTask color={'#FF7964'} />
                                    </span>
                                    <h2 className="text-[18px] ml-2 font-semibold ">
                                        {dataUpdate !== '' ? 'Update' : 'Add a Task'}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="flex w-1/3  justify-end mr-6 items-center "
                                >
                                    <Cross />
                                </button>
                            </div>
                        </div>
                        <div className="min-h-[582px] h-auto">
                            <div className="flex flex-col items-center">
                                <div className={`min-h-[582px] h-auto flex flex-col ${isKeyboardOpen ? '' : 'justify-between'}`}>
                                    <div className="w-full py-10 space-y-8 flex flex-col">
                                        <div className="w-full">
                                            <input
                                                onChange={handleChange}
                                                onFocus={() => setIsKeyboardOpen(true)}

                                                defaultValue={
                                                    // dataUpdate !== '' ? dataUpdate.input :
                                                    inputValue
                                                }
                                                type="text"
                                                className="w-full capitalize border-2 rounded-[4px] p-2 outline-[#21A7F9]"
                                                placeholder="Task Description"


                                            />

                                        </div>
                                        <div className="flex  justify-between items-center">
                                            <div className="flex w-1/3 justify-between">
                                                <div>
                                                    {' '}
                                                    <Pin color={'#FF7964'} />
                                                </div>
                                                <div className="flex items-center">
                                                    <h2 className="text-[14px] font-normal">
                                                        Pin to top
                                                    </h2>
                                                </div>
                                            </div>
                                            <button onClick={() => setIsPinned(!isPinned)} className="flex items-center">
                                                {isPinned ? <RadioButtonChecked /> : <RadioButtonEmpty />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            onClick={handleSubmit}

                                            className="h-auto min-h-[52px] w-full bg-[#21A7F9] text-white"
                                        >
                                            {dataUpdate !== '' ? 'Update' : 'Save'}
                                        </button>
                                        <button onClick={() => setOpen(false)} className="h-[54px] w-[311px] text-[#21A7F9] ">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    )
}
export default Modal
