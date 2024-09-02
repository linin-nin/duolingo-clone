import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full flex-col gap-y-3 h-full flex items-center justify-center '>
        <Loader className='h-6 w-6 text-muted-foreground animate-spin'/>
        <p>Loading...</p>
    </div>
  )
}

export default Loading