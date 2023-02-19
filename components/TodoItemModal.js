import Pin from '@/public/pin';
import Trash from '@/public/trash';
import Update from '@/public/update';
import React, { useContext } from 'react';
import Sheet from 'react-modal-sheet';
import { Context } from '../context/Context'
function TodoItemModal(props) {
    const { removeTodoList, changedPin, sendDataForUpdate } = useContext(Context);
    const { isOpenTodoModal, setIsOpenTodoModal, item, setOpen } = props;
    const handleDelete = () => {
        removeTodoList(item.id)
        setIsOpenTodoModal(false)
    }
    const handleUpdate = () => {
        setIsOpenTodoModal(false)
        setOpen(true)
        sendDataForUpdate(item)
    }
    function handleChangePin() {
        changedPin(item.id);
    }
    return (
        <Sheet
            isOpen={isOpenTodoModal}
            onClose={() => setIsOpenTodoModal(false)}
            snapPoints={[240]}
            initialSnap={0}
        >
            <Sheet.Container>
                <Sheet.Content>
                    <div className='h-full' >
                        <div className="flex flex-col justify-around items-center h-5/6 ">
                            <button onClick={handleChangePin} className="flex items-center justify-center h-1/3 w-full border-b">
                                <Pin color={'black'} />

                                {' '}
                                <h2 className="ml-2  text-[14px]">{item.pinned === false ? ' Pin on the top' : 'Unpin'}</h2>

                            </button>
                            <button onClick={handleUpdate} className="h-1/3 w-full flex items-center justify-center border-b">
                                <Update />

                                {' '}
                                <h2 className="ml-2  text-[14px]">Update</h2>

                            </button>
                            <button onClick={handleDelete} className="h-1/3  w-full flex items-center justify-center border-b">
                                <Trash />

                                {' '}
                                <h2 className="ml-2  text-[14px]">Delete</h2>

                            </button>
                        </div>
                    </div>
                </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop />
        </Sheet>
    )
}

export default TodoItemModal
