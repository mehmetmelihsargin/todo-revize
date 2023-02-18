import Pin from '@/public/pin';
import Trash from '@/public/trash';
import Update from '@/public/update';
import React from 'react';
import Sheet from 'react-modal-sheet';
function TodoItemModal(props) {
    const { isOpenTodoModal, setIsOpenTodoModal } = props;
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
                            <div className="flex items-center justify-center h-1/3 w-full border-b">
                                <Pin color={'black'} />
                                <button>
                                    {' '}
                                    <h2 className="ml-2  text-[14px]">Pin on the top</h2>
                                </button>
                            </div>
                            <div className="h-1/3 w-full flex items-center justify-center border-b">
                                <Update />
                                <button>
                                    {' '}
                                    <h2 className="ml-2  text-[14px]">Update</h2>
                                </button>
                            </div>
                            <div className="h-1/3  w-full flex items-center justify-center border-b">
                                <Trash />
                                <button>
                                    {' '}
                                    <h2 className="ml-2  text-[14px]">Delete</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop />
        </Sheet>
    )
}

export default TodoItemModal
