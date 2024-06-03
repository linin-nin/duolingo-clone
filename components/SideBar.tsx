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
    <div className={cn('flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col', className)}>
      <Link href="/">
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src="/images/duck.png" alt='logo' width={40} height={40}/>
          <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
            Duolingo
          </h1>
        </div>
      </Link>

      <div className='flex flex-col gap-y-2 flex-1'>
        <SideBarItem label='Learn' href='/learn' iconSrc='/images/learn.svg'/>
        <SideBarItem label='Leaderboard' href='/leaderboard' iconSrc='/images/leaderboard.svg'/>
        <SideBarItem label='quests' href='/quests' iconSrc='/images/quests.svg'/>
        <SideBarItem label='shop' href='/shop' iconSrc='/images/shop.svg'/>
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