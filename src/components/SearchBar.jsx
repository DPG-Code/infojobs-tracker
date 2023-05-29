import { useContext, useEffect, useState } from 'react'
import { JobsContext } from '@/context/JobsContext'
import { getJobData } from '@/services/getJobData'
import { SearchIcon } from './Icons'

export default function SearchBar({ queryParam, setSuccefull }) {
  const { query, setQuery, setDataJobs } = useContext(JobsContext)

  useEffect(() => {
    const getData = async () => {
      if (queryParam !== '') {
        const data = await getJobData(queryParam)
        setDataJobs(data)
        setSuccefull(true)
      }
    }
    if (queryParam) getData()
  }, [queryParam])

  const getData = async () => {
    if (query !== '') {
      const data = await getJobData(query)
      setDataJobs(data)
      setSuccefull(true)
    }
  }

  return (
    <>
      <form
        className='w-full flex items-center justify-center gap-4 lg:gap-8 xl:gap-10'
        onSubmit={(e) => {
          e.preventDefault()
          getData()
        }}
      >
        <div className='flex items-center relative'>
          <input
            className='px-4 py-1 w-52 border-2 border-neutral-400 text-black text-base rounded-full sm:w-72 lg:w-auto lg:text-xl 2xl:px-10 2xl:py-2 2xl:text-2xl'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Posicion, Tecnologia...'
          />
          <div className='absolute right-4'>
            <SearchIcon />
          </div>
        </div>
        <button
          className='px-4 py-1 bg-blue-500 text-white text-base font-medium rounded-full transition hover:shadow-lg hover:shadow-blue-300 lg:text-xl 2xl:px-10 2xl:py-2 2xl:text-2xl'
          type='submit'
        >
          Buscar
        </button>
      </form>
    </>
  )
}
