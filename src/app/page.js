'use client'

import JobTracker from '@/components/JobTracker'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-24 gap-6'>
      <Image
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />

      <JobTracker />
    </main>
  )
}
