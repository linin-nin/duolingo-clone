import { getCourese, getUserProgress } from '@/db/queries'
import React from 'react'
import List from './List'

const CoursePage = async() => {
    const coursesData = await getCourese()
    const userProgressData = await getUserProgress()

  return (
    <div className='h-full max-w-[912px] px-3 mx-auto'>
        <h1 className='text-2xl font-bold text-neutral-700'>
            Language Courses
        </h1>
        <List courses={coursesData} activeCourseId = {userProgressData?.activeCourseId}/>
    </div>
  )
}

export default CoursePage