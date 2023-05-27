'use client'

import JobTracker from '@/components/JobTracker'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className='py-32 px-10 flex flex-col items-center justify-between gap-6'>
      <section className='flex flex-col items-center justify-center gap-12'>
        <Image
          src='/logo.png'
          alt='JobTracker'
          width={180}
          height={37}
          priority
        />
        <JobTracker />
      </section>
    </main>
  )
}
