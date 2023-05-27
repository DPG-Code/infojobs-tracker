'use client'

import JobTracker from '@/components/JobTracker'

export default async function Offer({ params }) {
  return (
    <main className='py-32 px-10 flex flex-col items-center justify-between gap-6'>
      <section className='flex flex-col items-center justify-center gap-12'>
        <JobTracker queryParam={params.query} />
      </section>
    </main>
  )
}
