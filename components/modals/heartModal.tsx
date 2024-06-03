"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useHeartModal } from '@/store/use-heart-mdal'

const HeartModal = () => {
    const router = useRouter()
    const [ isClient, setIsClient] = useState(false)
    const { isOpen, close } = useHeartModal()

    useEffect(() => setIsClient(true), [])

    if(!isClient) {
        return null
    }

    const onClick = () => {
        close()
        router.push("/store")
    }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <div className='flex items-center w-full justify-center mb-5'>
              <Image src="/images/hero/png" height={80} width={80} alt='MMM'/>
            </div>
            <DialogTitle className='text-center font-bold text-2xl'>
              You ran out of hearts!
            </DialogTitle>
            <DialogDescription className='text-center text-base'>
              Get Pro for unlimited hearts, or purchase then in the store.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='mb-4'>
              <div className='flex flex-col gap-y-4 w-full'>
                <Button variant='primary' className='w-full' size='lg' onClick={onClick}>
                  Get Unlimited hearts
                </Button>
                <Button variant='primarOutline' className='w-full' size='lg' onClick={close}>
                  No thanks
                </Button>
              </div>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default HeartModal