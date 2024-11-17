import React from 'react'
import clsx from 'clsx'

type Props = {
    children: React.ReactNode,
    className?: string
}

function Container({ children, ...props }: Props) {
    return (
        <div className={clsx('bg-gray-100 rounded container w-[500px] py-2 px-2', props.className)}>
            {children}
        </ div>
    )
}

export default Container