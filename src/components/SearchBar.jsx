import { useContext, useState } from 'react'
import { JobsContext } from '@/context/JobsContext'
import { getJobData } from '@/services/getJobData'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const { setDataJobs } = useContext(JobsContext)

  const getData = async () => {
    if (query !== '') {
      const data = await getJobData(query)
      setDataJobs(data)
    }
  }

  return (
    <form
      className='w-full flex flex-col items-center justify-center'
      onSubmit={(e) => {
        e.preventDefault()
        getData()
      }}
    >
      <input
        className='px-4 border border-black rounded-full'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
