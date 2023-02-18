import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import Sheet from 'react-modal-sheet';
import pin from '../public/pin.js'
import addTask from '../public/addTask.js'
import AddTask from '../public/addTask.js';
import Pin from '../public/pin.js';
import Cross from '@/public/cross.js';
import RadioButtonEmpty from '@/public/radioButtonEmpty.js';
import RadioButtonChecked from '@/public/radioButtonChecked.js';

function Modal(props) {
    const { isOpen, setOpen } = props;
    const [isPinned, setIsPinned] = useState(false);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
    const handleSubmit = () => {
        setOpen(false);
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
                                        <AddTask />
                                    </span>
                                    <h2 className="text-[18px] ml-2 font-semibold ">
                                        Add a Task
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
                                                onFocus={() => setIsKeyboardOpen(true)}
                                                onBlur={() => setIsKeyboardOpen(false)}
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
                                            Save
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
