import { createContext, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

export const JobsContext = createContext({})

export default function JobsContextProvider({ children }) {
  const [query, setQuery] = useState('')
  const [succefull, setSuccefull] = useState(false)
  const [firstSearch, setFirstSearch] = useState(true)
  const [dataJobs, setDataJobs] = useState([])
  const [favoriteJobs, setFavoriteJobs] = useLocalStorageState('favorites', {
    defaultValue: []
  })

  return (
    <JobsContext.Provider
      value={{
        query,
        setQuery,
        succefull,
        setSuccefull,
        firstSearch,
        setFirstSearch,
        dataJobs,
        setDataJobs,
        favoriteJobs,
        setFavoriteJobs
      }}
    >
      {children}
    </JobsContext.Provider>
  )
}
