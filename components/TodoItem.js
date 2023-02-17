import React, { useState } from 'react';
import dots from '../public/dots.svg';
import checkedBox from '../public/checkedBox.svg';
import box from '../public/box.svg'
import Image from 'next/image';


function TodoItem() {
    const [isChecked, setisChecked] = useState(false)
    return (
        <div className="flex items-center justify-between">
            <button onClick={() => setisChecked(!isChecked)} className="flex items-center">
                {isChecked ?
                    <Image src={checkedBox} /> : <Image src={box} />}
            </button>
            <div className="flex items-center capitalize w-4/6 text-[16px]">
                <h2 className="capitalize">xcvxcv</h2>
            </div>

            <button className="flex items-center">
                <Image src={dots} />
            </button>
        </div>
    )
}

export default TodoItem