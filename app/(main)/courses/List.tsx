'use client'

import { courses } from '@/db/schema'
import React from 'react'
import Card from './Card'


interface Props {
    courses: typeof courses.$inferSelect[],
    activeCourseId: number
}
const List = ({courses, activeCourseId}: Props) => {
  return (
    <div className='pt-6 grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fill,minmax(210,1fr))]'>
        {
            courses.map((course) => (
                <Card key={course.id} id={course.id} title={course.title} imageSrc={course.imageSrc} onClick={() => {}} disabled={false} active={course.id===activeCourseId} />
            ))
        }

    </div>
  )
}

export default List