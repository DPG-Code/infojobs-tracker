import { JobsContext } from '@/context/JobsContext'
import { useContext } from 'react'

export default function ButtonFavorite({ query }) {
  const { favoriteJobs, setFavoriteJobs } = useContext(JobsContext)

  const addFavorite = () => {
    setFavoriteJobs((prev) => [...prev, query])
  }

  const deleteFavorite = () => {
    setFavoriteJobs((prev) => prev.filter((favorite) => favorite !== query))
  }

  return (
    <>
      {favoriteJobs.includes(query) ? (
        <button onClick={deleteFavorite}>remove favorites</button>
      ) : (
        <button onClick={addFavorite}>add favorites</button>
      )}
    </>
  )
}
