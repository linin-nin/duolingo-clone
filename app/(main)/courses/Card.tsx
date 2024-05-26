'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


interface Props {
    id: number,
    title: string,
    imageSrc: string ,
    onClick: (id:number) => void ,
    disabled: boolean,
    active: boolean,
}
const Card = ({id, title, imageSrc, onClick, disabled, active}:Props) => {
  return (
    <div className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col p-3 pb-6 min-h-[271px] min-w-[200px] items-center justify-between", disabled && "pointer-events-none opacity-50")} 
    onClick={() => onClick(id)}
    >
        <div className='min-[24px] w-full flex items-center justify-end'>
            {active && (
                <div className='rounded-md bg-green-600 flex items-center justify-center p-1.5'>
                    <Check className='text-white stroke-[4] h-4 w-4'/>
                </div>
            )}
        </div>
        <Image src={imageSrc} alt={title} height={70} width={93.33} className='rounded-lg drop-shadow-md border object-cover'/>
        <p className=''>{title}</p>
    </div>
  )
}

export default Card