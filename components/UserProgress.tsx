import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { InfinityIcon } from 'lucide-react'
import { courses } from '@/db/schema'


interface Props {
    activeCourse: typeof courses.$inferSelect,
    hearts: number,
    points: number,
    hasActiveSubscription: boolean,
}
const UserProgress = ({activeCourse, hearts, points, hasActiveSubscription}:Props) => {
  return (
    <div className='flex items-center justify-between gap-x-2 w-full'>
        <Link href="/courses">
            <Button variant='ghost'>
               <Image src={activeCourse.imageSrc} alt={activeCourse.title} className='rounded-md border-2' height={32} width={32}/> 
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant='ghost' className='text-orange-500'>
                <Image src='/point' alt='Point' height={28} width={28} className='mr-2'/>
                {points}
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant='ghost' className='text-rose-500'>
                <Image src='/Heart' alt='Heart' height={22} width={22} className='mr-2'/>
                {hasActiveSubscription ? <InfinityIcon  className='w-4 h-4 stroke-[3]'/> : hearts}
            </Button>
        </Link>
    </div>
  )
}

export default UserProgress