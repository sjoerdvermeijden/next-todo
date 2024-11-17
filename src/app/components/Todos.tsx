import React from 'react'

import Button from './Button'

function Todos() {
    return (
        <ul className='flex flex-col gap-2'>
            <li className='flex'>
                <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                    <span className=''>Todo</span>
                </div>
                <Button className="mr-1 bg-slate-800">Edit</Button>
                <Button className="mr-1 bg-red-500">Completed</Button>
                <Button className="bg-purple-500">Delete</Button>
            </li>
        </ul>
    )
}

export default Todos