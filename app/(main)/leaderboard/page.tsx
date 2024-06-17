import FeedWrapper from '@/components/FeedWrapper'
import Promo from '@/components/Promo'
import Quest from '@/components/Quest'
import StickWrapper from '@/components/StickWrapper'
import UserProgress from '@/components/UserProgress'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'   
import { getTopTenUsers, getUserProgress } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const LeaderBoardPage = async() => {

    const userProgressData = getUserProgress()
    // const userSubscriptionData = getUserSubscription()
    const leaderboardData = getTopTenUsers()

    const [userProgress, leaderboard] = await Promise.all([
        userProgressData,
        leaderboardData
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
                <Image src="/images/leaderboard.svg" alt='leaderboard' height={90} width={90} />
                <h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
                    Leaderboard
                </h1>
                <p className='text-muted-foreground text-center text-lg mb-6'>
                    See where you spand among learners in the community
                </p>
                    <Separator  className="mb-4 h-0.5 rounded-full"/>
                {
                    // Todo: installl from shadcn Avarta and seperator
                    leaderboard.map((userProgress, index) => (
                        <div 
                            className='flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50' 
                            key={userProgress.userId}>
                            <p className='font-bold text-lime-700 mr-4'>{index + 1}</p>
                            <Avatar className="border bg-green-500 h-12 w-12 mt-3 mr-6">
                                <AvatarImage 
                                className="object-cover"
                                src={userProgress.userImageSrc}/>
                            </Avatar>
                            <p className='font-bold text-neutral-800 flex-1'>
                                {userProgress.userName}
                            </p>
                            <p className='text-muted-foreground'>{userProgress.points} XP</p>
                        </div>
                    ))
                }
            </div>
        </FeedWrapper>
    </div>
  )
}

export default LeaderBoardPage