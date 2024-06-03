import FeedWrapper from '@/components/FeedWrapper'
import StickWrapper from '@/components/StickWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation'
import Unit from './Unit'
import { lessons, units as unitsSchem } from '@/db/schema'
import Promo from '@/components/Promo'
import Quests from '@/components/quests'

const LearnPage = async () => {

  const userProgressData = getUserProgress()
  const courseProgressData = await getCourseProgress()
  const lessonPercentageData = getLessonPercentage()
  const unitsData = getUnits()
  const userSubscriptionData = getUserSubscription()

  const [ userProgress, units, courseProgress , lessonPercentage, userSubscription ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
    userSubscriptionData
  ])

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  if(!courseProgress) {
    redirect("/courses")
  }

  const isPro = !!userSubscription?.isActive
  
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickWrapper>
        <UserProgress 
        activeCourse={userProgress.activeCourse} 
        hearts={userProgress.hearts} 
        points={userProgress.points} 
        hasActiveSubscription={isPro}/>
        {!isPro && (
          <Promo />
        )}
        <Quests points={userProgress.points}/>
      </StickWrapper>

      <FeedWrapper>
        <Header title={userProgress.activeCourse.title}/>
        {
          units.map((unit) => (
            <div className='mb-10' key={unit.id}>
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.Description}
                title={unit.title}
                lessons={unit.lesson}
                activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                  unit: typeof unitsSchem.$inferSelect
                } | undefined }
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          ))
        }
      </FeedWrapper>
    </div>
  )
}

export default LearnPage