import React from 'react'
import MobileSidebar from './MobileSidebar'

const MobileHeader = () => {
  return (
    <nav className='lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b w-full fixed top-0 left-0 z-50'>
        <MobileSidebar/>
    </nav>
  )
}

export default MobileHeader