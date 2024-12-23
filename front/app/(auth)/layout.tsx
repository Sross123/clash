import React, { ReactNode } from 'react'

interface ILayout {
    children: ReactNode
}

const layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className='w-full h-full'>{children}</div>
    )
}

export default layout