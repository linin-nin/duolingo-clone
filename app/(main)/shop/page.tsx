import FeedWrapper from '@/components/FeedWrapper'
import StickWrapper from '@/components/StickWrapper'
import UserProgress from '@/components/UserProgress'
import { getUserProgress } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import Items from './Items'
import Promo from '@/components/Promo'
import Quest from '@/components/Quest'

const ShopPage = async() => {

    const userProgressData = getUserProgress()
    // const userSubscriptionData = getUserSubscription()

    const [userProgress] = await Promise.all([
        userProgressData,
    ])

    if(!userProgress || !userProgress.activeCourse) {
        redirect('/courses')
    }

    // const isPro = !!userSubscription?.isActive
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickWrapper>
            <UserProgress 
                activeCourse={userProgress.activeCourse}
                hearts={userProgress.hearts}
                points={userProgress.points}
                hasActiveSubscription={false}
            />
            {/* {!isPro && (
              <Promo />
            )} */}
            <Quest points={userProgress.points}/>
        </StickWrapper>
        <FeedWrapper>
            <div className='w-full flex flex-col items-center'>
                <Image src="/images/shop.svg" alt='Shop' height={90} width={90} />
                <h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
                    Shop
                </h1>
                <p className='text-muted-foreground text-center text-lg mb-6'>
                    Spand your points on cool stuff.
                </p>
                <Items
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </div>
        </FeedWrapper>
    </div>
  )
}

export default ShopPage