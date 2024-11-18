'use client'

import React from 'react'

import Button from './Button'

const deleteTodo = () => {
    console.log('Delete')
}

const completeTodo = () => {
    console.log('Complete')
}

const updateTodo = () => {
    console.log('Update')
}

function Todos() {
    return (
        <ul className='flex flex-col gap-2'>
            <li className='flex'>
                <div className='grow bg-white flex items-center px-3 rounded mr-2'>
                    <span className=''>Todo</span>
                </div>
                <Button className="mr-1 bg-slate-800" buttonFunction={updateTodo}>Edit</Button>
                <Button className="mr-1 bg-green-500" buttonFunction={completeTodo}>Completed</Button>
                <Button className="bg-red-500" buttonFunction={deleteTodo}>Delete</Button>
            </li>
        </ul>
    )
}

export default Todos