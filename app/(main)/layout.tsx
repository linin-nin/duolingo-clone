import MobileHeader from '@/components/MobileHeader'
import SideBar from '@/components/SideBar'
import React, { ReactNode } from 'react'


type Props = {
    children: ReactNode
}
const LearnLayoutPage = ({children}: Props) => {
  return (
    <>
        <MobileHeader/>
        <SideBar className='hidden lg:flex'/>
        <main className='lg:pl-[256px] h-full pt-[50px] lg:pt-0'>
            <div className='max-w-[1056px] mx-auto pt-6 h-full'>
                {children}
            </div>
        </main>
    </>
  )
}

export default LearnLayoutPage