"use client"

import { useExitModal } from '@/store/use-exit-modal'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import Image from 'next/image'
import { Button } from '../ui/button'

const ExitModal = () => {
    const router = useRouter()
    const [ isClient, setIsClient] = useState(false)
    const { isOpen, close } = useExitModal()

    useEffect(() => setIsClient(true), [])

    if(!isClient) {
        return null
    }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <div className='flex items-center w-full justify-center mb-5'>
              <Image src="/images/giraffe.png" height={80} width={80} alt='MMM'/>
            </div>
            <DialogTitle className='text-center font-bold text-2xl'>
              Wait, don&apos;t go!
            </DialogTitle>
            <DialogDescription className='text-center text-base'>
              You&apos;re about to leave the lesson. Are you sure?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='mb-4'>
              <div className='flex flex-col gap-y-4 w-full'>
                <Button variant='primary' className='w-full' size='lg' onClick={close}>
                  Keep lerning
                </Button>
                <Button variant='dangerOutline' className='w-full' size='lg' onClick={() => {
                  close();
                  router.push('/learn')
                }}>
                  End session
                </Button>
              </div>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ExitModal