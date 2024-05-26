import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SideBarItem from './SideBarItem'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'


type Props ={
    className?: string
}
const SideBar = ({className}: Props) => {
  return (
    <div className={cn('left-0 top-0 border-r-2 flex-col h-full lg:w-[256px] lg:fixed flex', className)}>
      <Link href="/">
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src="/images/giraffe.png" alt='Giraffe' width={40} height={40}/>
          <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
            Duolingo
          </h1>
        </div>
      </Link>

      <div className='flex flex-col gap-y-2 flex-1'>
        <SideBarItem label='Learn' href='/learn' iconSrc=''/>
        <SideBarItem label='Leaderboard' href='/leaderboard' iconSrc=''/>
        <SideBarItem label='quests' href='/quests' iconSrc=''/>
        <SideBarItem label='shop' href='/shop' iconSrc=''/>
      </div>

      <div className='p-4'>
        <ClerkLoading>
          <Loader className='h-5 text-muted-foreground w-5 animate-spin'/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl='/'/>
        </ClerkLoaded>
      </div>
    </div>
  )
}

export default SideBar