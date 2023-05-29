'use client'

import JobTracker from '@/components/JobTracker'
import Image from 'next/image'

export default async function Home() {
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
        <JobTracker />
      </section>
    </main>
  )
}
