import { createContext, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

export const JobsContext = createContext({})

export default function JobsContextProvider({ children }) {
  const [dataJobs, setDataJobs] = useState([])
  const [favoriteJobs, setFavoriteJobs] = useLocalStorageState('favorites', {
    defaultValue: []
  })

  return (
    <JobsContext.Provider
      value={{ dataJobs, setDataJobs, favoriteJobs, setFavoriteJobs }}
    >
      {children}
    </JobsContext.Provider>
  )
}
