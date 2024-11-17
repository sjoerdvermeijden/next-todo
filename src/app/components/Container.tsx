import React from 'react'

import Button from './Button'

function Container({ }) {
    return (
        <div className='bg-gray-100 rounded container w-[500px] py-2 px-4'>
            <ul className='flex flex-col gap-2'>
                <li className='flex'>
                    <div className='grow bg-white flex items-center px-2 rounded mr-2'>
                        <span className=''>Todo</span>
                    </div>
                    <Button className="mr-1 bg-grey-500">Edit</Button>
                    <Button className="mr-1 bg-red-500">Completed</Button>
                    <Button className="bg-purple-500">Delete</Button>
                </li>
            </ul>
        </div>
    )
}

export default Container