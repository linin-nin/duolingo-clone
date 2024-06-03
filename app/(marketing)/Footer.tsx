import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button className='-w-full' size="lg" variant="ghost">
          <Image height={32} width={40} src="/images/cd.svg" alt="Croatian" className='mr-4'/>
          Croatian
        </Button>
        <Button className='-w-full' size="lg" variant="ghost">
          <Image height={32} width={40} src="/images/kr.svg" alt="Croatian" className='mr-4'/>
          Croatian
        </Button>
        <Button className='-w-full' size="lg" variant="ghost">
          <Image height={32} width={40} src="/images/jp.svg" alt="Croatian" className='mr-4'/>
          Croatian
        </Button>
        <Button className='-w-full' size="lg" variant="ghost">
          <Image height={32} width={40} src="/images/usa.svg" alt="Croatian" className='mr-4'/>
          Croatian
        </Button>
        <Button className='-w-full' size="lg" variant="ghost">
          <Image height={32} width={40} src="/images/ch.svg" alt="Croatian" className='mr-4'/>
          Croatian
        </Button>
      </div>
    </footer>
  )
}

export default Footer