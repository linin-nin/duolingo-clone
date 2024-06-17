import { getLessons, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'
import React from 'react'
import Quiz from './Quiz'

const LessonPage = async() => {
    const lessonData = getLessons()
    const userProgressData = getUserProgress()
    // const userSubscriptionData = getUserSubscription()    Todo: fix UserSubscription

    const [ lesson, userProgress ] = await Promise.all([
        lessonData,
        userProgressData,
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
        userSubscription={null}
    />
  )
}

export default LessonPage