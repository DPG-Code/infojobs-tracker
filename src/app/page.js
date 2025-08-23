'use client'

import JobTracker from '@/components/JobTracker'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='py-32 px-10 flex flex-col items-center justify-center lg:py-36'>
      <section className='w-full flex flex-col items-center justify-center gap-12 lg:gap-16'>
        <Image
          src='/logo.webp'
          alt='JobTracker'
          width={720}
          height={200}
          priority
        />
        <h2 className='text-center text-black text-sm lg:text-xl 2xl:text-2xl'>
          La Api de <span className='text-blue-500'>Infojobs</span> ha sido
          desabilitada
        </h2>
        <JobTracker />
      </section>
    </main>
  )
}
