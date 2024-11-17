import React from 'react'
import clsx from 'clsx'

type Props = {
    children: React.ReactNode,
    className?: string[] | string
}

function Button({ children, ...props }: Props) {
    return (
        <div className={clsx('py-1 px-2 text-white bg-red-200 rounded hover:cursor-pointer', props.className)}>{children}</div>
    )
}

export default Button