'use client'
import React from 'react'
import TodoItem from './TodoItem'

function Board() {
    return (
        <div className="h-[650px] w-[343px] rounded-[8px] bg-white">
            <div className="h-[54px] flex flex-col justify-center items-center border-b text-blue-800 font-semibold ">
                <h1 className="p-3">To Do List</h1>
                <span className="w-[159px] h-1 bg-orange-400"></span>
            </div>
            <div className="h-[596px] flex justify-center items-center flex-col">
                <div className="h-[508px] w-[311px]">
                    <div className="h-[400px] flex flex-col justify-between">
                        <div className=" h-[126px] border-b-2 flex flex-col justify-around ">
                            <div className="flex items-center">
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.8861 0.553411C7.7796 -0.340086 9.29656 -0.0211116 9.75455 1.15657L10.3882 2.78609C10.7138 3.62316 11.2336 4.37086 11.9049 4.96755C12.5405 5.53255 13.2951 5.94723 14.1129 6.18087L18.072 7.31205C19.355 7.67862 19.7722 9.28863 18.8287 10.2322L15.0607 14.0001L20.6554 19.5947C20.9483 19.8876 20.9483 20.3625 20.6554 20.6554C20.3625 20.9483 19.8876 20.9483 19.5947 20.6554L14.0001 15.0607L10.2322 18.8287C9.28863 19.7722 7.67862 19.355 7.31205 18.072L6.18087 14.1129C5.94723 13.2951 5.53255 12.5405 4.96755 11.9049C4.37086 11.2336 3.62316 10.7138 2.78609 10.3882L1.15657 9.75454C-0.0211124 9.29656 -0.340086 7.7796 0.553411 6.8861L6.8861 0.553411ZM13.4748 13.4647C13.4731 13.4663 13.4714 13.468 13.4697 13.4697C13.468 13.4714 13.4663 13.4731 13.4647 13.4748L9.17149 17.768C9.0367 17.9028 8.8067 17.8432 8.75434 17.6599L7.62315 13.7008C7.32768 12.6666 6.80322 11.7122 6.08866 10.9083C5.33403 10.0594 4.3884 9.40194 3.32976 8.99024L1.70024 8.35654C1.532 8.29111 1.48643 8.0744 1.61407 7.94676L7.94676 1.61407C8.0744 1.48643 8.29111 1.532 8.35654 1.70024L8.99024 3.32976C9.40194 4.3884 10.0594 5.33403 10.9083 6.08866C11.7122 6.80322 12.6666 7.32768 13.7008 7.62315L17.6599 8.75434C17.8432 8.8067 17.9028 9.03671 17.768 9.17149L13.4748 13.4647Z"
                                        fill="#FF7964"
                                    />
                                </svg>
                                <h2 className="ml-2 text-[#FF7964] text-[14px]">
                                    Pin on the top
                                </h2>
                            </div>


                        </div>
                        <div className="h-[264px] ">
                            <div className="space-y-6">
                                <TodoItem />


                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button

                        className="h-[54px] w-[311px] flex justify-between items-center  text-white font-normal text-[18px] bg-[#21A7F9] rounded-[4px]"
                    >
                        <div className="flex h-full items-center w-3/5 justify-evenly ">
                            <span>
                                {' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="15"
                                    fill="none"
                                    viewBox="0 0 18 15"
                                >
                                    <path
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M0 1.25A.75.75 0 01.75.5h13.5a.75.75 0 010 1.5H.75A.75.75 0 010 1.25zM.75 6a.75.75 0 01.75.75v7a.75.75 0 01-1.5 0v-7A.75.75 0 01.75 6zM5 7.313a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75zm0 5.937a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                            Add a Task
                        </div>
                        <div className="flex h-full items-center w-3/5 justify-end">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="15"
                                    fill="none"
                                    viewBox="0 0 17 15"
                                    className="mr-4"
                                >
                                    <path
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M8.312.852a1.066 1.066 0 011.507 0l6.04 6.04a1.066 1.066 0 010 1.506l-6.04 6.04a1.066 1.066 0 01-1.507-1.507l4.22-4.22H1.961a1.066 1.066 0 010-2.132h10.571l-4.22-4.22a1.066 1.066 0 010-1.507z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Board
