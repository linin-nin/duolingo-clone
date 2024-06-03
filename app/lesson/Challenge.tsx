import { challengeOptions, challenges } from '@/db/schema'
import { cn } from '@/lib/utils'
import React from 'react'
import Card from './Card'

interface Props {
    options: typeof challengeOptions.$inferSelect[]
    onSelect: (id:number) => void
    status: "correct" | "wrong" | "none"
    selectedOptions?: number
    disabled?: boolean
    type: typeof challenges.$inferSelect['type']
}

const Challenge = ({ options, disabled, type, onSelect, status, selectedOptions, }: Props) => {
  return (
    <div className={cn("grid gap-2", type === "ASSIST" && "grid-cols-1", type === "SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]")}>
        {options.map((option, i) => (
            <Card 
                key={option.id}
                id={option.id}
                text={option.text}
                imageSrc={option.imageSrc}
                shortCut={`${i+1}`}
                selected={selectedOptions === option.id}
                onClick={() => onSelect(option.id)}
                status={status}
                audioSrc={option.audioSrc}
                disabled={disabled}
                type={type}
            />
        ))}
    </div>
  )
}

export default Challenge