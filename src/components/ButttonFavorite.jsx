import { JobsContext } from '@/context/JobsContext'
import { useContext } from 'react'
import { FavIcon, RemoveFavIcon } from './Icons'

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
        <button
          className='px-4 py-1 bg-white border-2 border-neutral-400 text-black text-sm font-medium rounded-full flex items-center justify-center gap-2 transition hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-lg hover:shadow-red-300 lg:text-lg xl:gap-3 xl:px-10 xl:py-2 xl:text-xl'
          onClick={deleteFavorite}
        >
          <RemoveFavIcon /> Eliminar
        </button>
      ) : (
        <button
          className='px-4 py-1 bg-white border-2 border-neutral-400 text-black text-sm font-medium rounded-full flex items-center justify-center gap-2 transition hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-300 lg:text-lg xl:gap-3 xl:px-10 xl:py-2 xl:text-xl'
          onClick={addFavorite}
        >
          <FavIcon /> Añadir
        </button>
      )}
    </>
  )
}
