import { createContext, useState } from 'react'

export const JobsContext = createContext({})

export default function JobsContextProvider({ children }) {
  const [dataJobs, setDataJobs] = useState([])
  const [favoriteJobs, setFavoriteJobs] = useState([])

  return (
    <JobsContext.Provider
      value={{ dataJobs, setDataJobs, favoriteJobs, setFavoriteJobs }}
    >
      {children}
    </JobsContext.Provider>
  )
}
