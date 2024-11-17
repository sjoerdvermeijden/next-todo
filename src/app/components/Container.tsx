import React from 'react'

import Button from './Button'

function Container({ }: Props) {
    return (
        <div className='bg-gray-100 rounded container w-[500px] py-2 px-4'>
            <ul className='flex flex-col gap-2'>
                <li className='flex'>
                    <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                        <span className=''>Todo</span>
                    </div>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                    <Button>Delete</Button>
                </li>
                <li className='flex'>
                    <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                        <span className=''>Todo</span>
                    </div>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                    <Button>Delete</Button>
                </li>
                <li className='flex'>
                    <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                        <span className=''>Todo</span>
                    </div>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                    <Button>Delete</Button>
                </li>
                <li className='flex'>
                    <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                        <span className=''>Todo</span>
                    </div>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                    <Button>Delete</Button>
                </li>
                <li className='flex'>
                    <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                        <span className=''>Todo</span>
                    </div>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                    <Button>Delete</Button>
                </li>
            </ul>
        </div>
    )
}

export default Container