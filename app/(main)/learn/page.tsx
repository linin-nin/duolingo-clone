import FeedWrapper from '@/components/FeedWrapper'
import StickWrapper from '@/components/StickWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'
import { getUnits, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const LearnPage = async () => {

  const userProgressData = getUserProgress()
  const unitsData = getUnits()

  const [ userProgress, units] = await Promise.all([
    userProgressData,
    unitsData
  ])

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }
  
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickWrapper>
        <UserProgress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={false}/>
      </StickWrapper>

      <FeedWrapper>
        <Header title={userProgress.activeCourse.title}/>
        {
          units.map((unit) => (
            <div className='mb-10' key={unit.id}>
              
            </div>
          ))
        }
      </FeedWrapper>
    </div>
  )
}

export default LearnPage