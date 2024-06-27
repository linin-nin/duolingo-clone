import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
        <div className='lg:max-w-screen-lg mx-auto items-center flex justify-between h-full '>
          <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
            <Image src="/images/duck.png" alt='logo' width={40} height={40}/>
            <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
              Duolingo
            </h1>
          </div>
          <ClerkLoading>
            <Loader className='h-5 w-5 text-muted-foreground animate-spin'/>
          </ClerkLoading>

          <ClerkLoaded>

            <SignedIn>
              {/* {redirect('/learn')} */}
              <UserButton 
                // signInUrl='/learn'
                afterSignOutUrl='/'
              />
            </SignedIn>

            <SignedOut>
              <SignInButton 
              mode="modal" 
              fallbackRedirectUrl="/lern"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
              </SignInButton>
            </SignedOut>

          </ClerkLoaded>
        </div>
    </header>
  )
}

export default Header