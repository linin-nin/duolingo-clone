"use client"

import { RefillHearts } from '@/actions/user-progress'
import { createStripeUrl } from '@/actions/user-subscription'
import { Button } from '@/components/ui/button'
import { POINT_TO_REFILL } from '@/constants'
import Image from 'next/image'
import React, { useTransition } from 'react'
import { toast } from 'sonner'


interface Props {
    hearts: number
    points: number
    hasActiveSubscription: boolean
}
const Items = ({ hearts, points, hasActiveSubscription}:Props) => {

    const [pending, startTranstion] = useTransition()

    const onRefillHearts = () => {
        if(pending || hearts === 5 && points < POINT_TO_REFILL) {
            return
        }

        startTranstion(() => {
            RefillHearts()
            .catch(() => toast.error('Something went wrong'))
        })
    }

    const onUpgrade = () => {
        startTranstion(() => {
            createStripeUrl()
                .then((response) => {
                    if(response.data) {
                        window.location.href=response.data
                    }
                })
                .catch(() => toast.error("Something went wrong"))
        })
    }
  return (
    <ul className='w-full'>
        <div className='flex border-t-2 items-center w-full p-4 gap-x-4'>
            <Image src="/images/heart.svg" alt='Heart' height={60} width={60} />
            <div className='flex-1'>
                <p className='text-neutral-700 text-base lg:text-lg font-bold'>
                    Refill hearts
                </p>
            </div>
            <Button onClick={onRefillHearts} disabled={pending || hearts === 5 || points < POINT_TO_REFILL}>
                {hearts === 5 ? "full" : (
                    <div className='flex items-center'>
                        <Image src="/images/point.png" alt='Point' height={20} width={20} />
                        <p>{POINT_TO_REFILL}</p>
                    </div>
                )}
            </Button>
        </div>

        <div className='flex items-center w-full p-4 pt-8 gap-x-4 border-t-2'>
            <Image src="/images/Unlimited.svg" alt='Unlimited' height={60} width={60}/>
            <div className='flex-1'>
                <p className='text-neutral-700 text-base lg:text-lg font-bold'>
                    Unlimited hearts
                </p>
            </div>
            <Button
            variant="secondaryOutline"
            // onClick={onUpgrade}
                disabled={pending || hasActiveSubscription}
            >
                Comming soon...
                {/* {hasActiveSubscription ? "sittings":"upgrade"}  todo: change to origin when fix subscrition ready*/}
            </Button>
        </div>
    </ul>
  )
}

export default Items