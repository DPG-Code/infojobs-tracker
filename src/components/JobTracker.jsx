import { useContext, useState } from 'react'
import { getJobData } from '@/services/getJobData'
import { JobsContext } from '@/context/JobsContext'
import SearchBar from './SearchBar'

export default function JobTracker() {
  const [query, setQuery] = useState('')

  const { dataJobs, setDataJobs } = useContext(JobsContext)

  const getData = async () => {
    if (query !== '') {
      const data = await getJobData(query)
      setDataJobs(data)
      console.log(data)
    }
  }

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} getData={getData} />

      <p>Total de empleos: 4500</p>

      <section className='grid grid-cols-2 text-left gap-2'>
        <div className='px-5 py-4'>
          <h2 className='mb-3 text-2xl font-semibold'>Salarios</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </div>
      </section>
    </>
  )
}
