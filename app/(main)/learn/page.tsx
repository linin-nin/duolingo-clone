import FeedWrapper from '@/components/FeedWrapper'
import StickWrapper from '@/components/StickWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'
import { getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const LearnPage = async () => {

  const userProgressData = getUserProgress()
  const [ userProgress] = await Promise.all([
    userProgressData
  ])
  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickWrapper>
        <UserProgress activeCourse={{ title: "Korean", imageSrc: "/image"}} hearts={5} points={100} hasActiveSubscription={false}/>
      </StickWrapper>

      <FeedWrapper>
        <Header title="Korean"/>
        <div className='space-y-4'>
          
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LearnPage