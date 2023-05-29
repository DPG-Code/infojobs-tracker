'use client'

import JobTracker from '@/components/JobTracker'

export default function Offer({ params }) {
  return (
    <main className='py-32 px-10 flex flex-col items-center justify-between gap-6 lg:py-36'>
      <section className='flex flex-col items-center justify-center gap-12 lg:gap-16'>
        <JobTracker queryParam={params.query} />
      </section>
    </main>
  )
}
