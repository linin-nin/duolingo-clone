"use client"

import { challengeOptions, challenges, userSubscription } from '@/db/schema'
import React, { useState, useTransition } from 'react'
import Header from './Header'
import QuestionBubble from './QuestionBubble'
import Challenge from './Challenge'
import Footer from './Footer'
import { upsetChallengeProgress } from '@/actions/challenge-progress'
import { toast } from 'sonner'
import { reduceHearts } from '@/actions/user-progress'
import { useAudio, useMount, useWindowSize } from 'react-use'
import Image from 'next/image'
import ResultCard from './ResultCard'
import { useRouter } from 'next/navigation'
import Confetti from "react-confetti"
import { useHeartModal } from '@/store/use-heart-mdal'
import { usePracticeModal } from '@/store/use-practice-modal'


interface Props {
    initailLessonId : number
    initailLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean
        challengeOptions: typeof challengeOptions.$inferSelect[]
    })[]
    initailHearts: number
    initailPercentage:number
    userSubscription: typeof userSubscription.$inferSelect & {
        isActive: boolean
    } | null
}

const Quiz = ({ initailHearts, initailLessonChallenges, initailLessonId, initailPercentage, userSubscription} : Props) => {


    const [ correctAudio, _c, correctControls] = useAudio({ src: "/audios/audio1.ogg"})
    const [ incorrectAudio, _i, incorrectControls] = useAudio({ src: "/audios/audio2.ogg"})

    const router = useRouter()

    const { open: openHeartModal } = useHeartModal()
    const { open: openPracticeModal } = usePracticeModal()

    useMount(() => {
        if(initailPercentage === 100) {
            openPracticeModal()
        }
    })
    const { width, height } = useWindowSize()
    const [ finishAudio ] = useAudio( { src: "/audios/finish.ogg", autoPlay: true})

    const [ pending, startTransition] = useTransition()
    const [hearts, setHearts] = useState(initailHearts)
    const [percentage, setPercentage] = useState(() => {
        return initailPercentage === 100 ? 0 : initailPercentage;
    })

    const [ lessonId, setLessonId] = useState(initailLessonId)

    const [challenges] = useState(initailLessonChallenges)
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    })

    const [selectedOption, setSelectedOption] = useState<number>()
    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none")

    const challenge = challenges[activeIndex]
    const options = challenge.challengeOptions

    console.log(options)

    const onNext = () => {
        setActiveIndex((current) => current + 1)
    }

    const onSelect = (id:number) => {
        if(status !== "none") return

        setSelectedOption(id)
    }

    const onContinue = () => {
        if(!selectedOption) return

        if(status === "wrong") {
            setStatus("none")
            setSelectedOption(undefined)
            return
        }

        if(status === "correct") {
            onNext()
            setStatus("none")
            setSelectedOption(undefined)
            return
        }

        const correctOption = options.find((option) => option.correct)

        if(!correctOption) {
            return;
        }

        if(correctOption.id === selectedOption) {
            startTransition(() => {
                upsetChallengeProgress(challenge.id).then(
                    (response) => {
                        if(response?.error === "hearts") {
                            openHeartModal()
                            return
                        }

                        correctControls.play()
                        setStatus("correct")
                        setPercentage((prev) => prev + 100 / challenges.length)

                        if(initailPercentage === 100) {
                            setHearts((prev) => Math.min(prev + 1, 5))
                        }
                    }
                )
                .catch(() => toast.error("Something went wrong, please try agian!"))
            })
        } else {
            startTransition(() => {
                reduceHearts(challenge.id).then((response) => {
                    if(response?.error === "hearts") {
                        openHeartModal()
                        return
                    }

                    incorrectControls.play()
                    setStatus("wrong")

                    if(!response?.error) {
                        setHearts((prev) => Math.max(prev -1, 0))
                    }
                }).catch(() => toast.error("Something went wrong. Please try agian."))
            })
        }
    }

    if(!challenge) {
        return (
            <>
                {finishAudio}
                <Confetti 
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={500}
                    tweenDuration={10000}
                />
               <div className='flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-full'>
                    <Image src="/images/finish.png" alt='Finish' height={100} width={100} className='hidden lg:block'/>
                    <Image src="/images/finish.png" alt='Finish' height={50} width={50} className='block lg:hidden'/>
                    <h1 className='text-xl lg:text-3xl font-bold text-neutral-700'>
                        Great job! <br/>
                        You're completed the lesson.
                    </h1>
                    <div className='flex items-center gap-x-4 w-full'>
                        <ResultCard 
                            variant="points"
                            value={challenges.length * 10}
                        />
                        <ResultCard 
                            variant="hearts"
                            value={hearts}
                        />
                    </div>
               </div>

               <Footer 
               lessonId={lessonId}
               status='completed'
               OnCheck={() => router.push('/learn')} 
               />
            </>
        )
    }

    const title = challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question

  return (
    <>
        {incorrectAudio}
        {correctAudio}
        <Header 
            hearts={hearts}
            percentage={percentage}
            hasActiveSubscription={!!userSubscription?.isActive}
        />
        <div className='flex-1'>
            <div className='h-full flex items-center justify-center'>
                <div className='lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12'>
                    <h1 className='text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700'>
                        {title}
                    </h1>
                    <div>
                        {challenge.type === 'SELECT' && (
                            <QuestionBubble question={challenge.question}/>
                        )}
                        <Challenge 
                        options={options} 
                        onSelect ={onSelect} 
                        status={status}
                        selectedOptions={selectedOption}
                        disabled={pending}
                        type={challenge.type}
                        />
                    </div>
                </div>
            </div>
        </div>

        <Footer 
        disabled={pending || !selectedOption} 
        status={status} 
        OnCheck={onContinue}/>
    </>
  )
}

export default Quiz