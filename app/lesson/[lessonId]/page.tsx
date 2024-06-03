import { getLessons, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation'
import React from 'react'
import Quiz from '../Quiz'

interface Props {
    param: {
        lessonId: number
    }
}

const LessonIdPage = async({param}:Props) => {
    const lessonData = getLessons(param.lessonId)
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()

    const [ lesson, userProgress, userSubscription] = await Promise.all([
        lessonData,
        userProgressData,
        userSubscriptionData
    ])

    if(!lesson || !userProgress) {
        redirect("/learn")
    }

    const initailPercentage = lesson.challenges
        .filter((challenge) => challenge.completed)
        .length/ lesson.challenges.length * 100
    
  return (
    <Quiz
        initailLessonId ={lesson.id}
        initailLessonChallenges={lesson.challenges}
        initailHearts={userProgress.hearts}
        initailPercentage={initailPercentage}
        userSubscription={userSubscription} 
    />
  )
}

export default LessonIdPage