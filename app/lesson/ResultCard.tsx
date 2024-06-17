import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
    value: number,
    variant: "points" | "hearts"
}
const ResultCard = ({ value, variant}:Props) => {

    const imageSrc = variant === "hearts" ?  "/images/heart.svg" : "/images/point.svg"
  return (
    <div className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-400 border-orange-400",
        variant === "hearts" && "bg-rose-500 border-rose-500"
    )}>
        <div className={cn(
            "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
            variant === "hearts" && "bg-rose-500",
            variant === "points" && "bg-orange-400"
        )}>
            {variant === "hearts" ? "Hearts Left" : "Total Xp"}
        </div>
        <div className={cn(
            "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
            variant==="hearts" && "text-rose-500",
            variant==="points" && "text-orange-400"
        )}>
            <Image src={imageSrc} alt="Icon" height={30} width={30} className="mr-1.5"/>
            {value}
        </div>
    </div>
  )
}

export default ResultCard