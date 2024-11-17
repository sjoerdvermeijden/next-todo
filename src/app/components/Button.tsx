import React from 'react'
import clsx from 'clsx'

type Props = {
    children: React.ReactNode,
    className?: string
}

function Button({ children, className }: Props) {
    return (
        <div className={clsx('py-1 px-2 text-white bg-red-200 rounded hover:cursor-pointer', className)}>{children}</div>
    )
}

export default Button