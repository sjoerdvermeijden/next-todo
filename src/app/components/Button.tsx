import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Button({ children }: Props) {
    return (
        <button className='py-1 px-2 bg-red-300 text-white rounded'>
            {children}
        </button>
    )
}

export default Button