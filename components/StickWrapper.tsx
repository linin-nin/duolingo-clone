import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode
}
const StickWrapper = ({children}: Props) => {
  return (
    <div className=' hidden lg:block w-[368px] sticky self-end bottom-6'>
        <div className='min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4'>
            {children}
        </div>
    </div>
  )
}

export default StickWrapper