import FeedWrapper from '@/components/FeedWrapper'
import StickWrapper from '@/components/StickWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'

const LearnPage = () => {
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