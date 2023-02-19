import React from 'react'

function AddTask({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15"
      fill="none"
      viewBox="0 0 18 15"
    >
      <path
        fill={`${color}`}
        fillRule="evenodd"
        d="M0 1.25A.75.75 0 01.75.5h13.5a.75.75 0 010 1.5H.75A.75.75 0 010 1.25zM.75 6a.75.75 0 01.75.75v7a.75.75 0 01-1.5 0v-7A.75.75 0 01.75 6zM5 7.313a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75zm0 5.937a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default AddTask
