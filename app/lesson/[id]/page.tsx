import { getLessons, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'
import React from 'react'
import Quiz from '../Quiz'

interface Props {
    params: {
        id: number
    }
}

const LessonIdPage = async({params}:Props) => { 
    const lessonData = getLessons(1)
    const userProgressData = getUserProgress()
    // const userSubscriptionData = getUserSubscription()   Todo: fix userSubscription

    const [ lesson, userProgress] = await Promise.all([
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
        // userSubscription={userSubscription} 
        userSubscription={null} 
    />
  )
}

export default LessonIdPage