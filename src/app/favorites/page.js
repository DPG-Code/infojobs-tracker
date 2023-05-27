'use client'

import { JobsContext } from '@/context/JobsContext'
import Link from 'next/link'
import { useContext } from 'react'

export default async function Favorites() {
  const { favoriteJobs, setFavoriteJobs } = useContext(JobsContext)

  const uniqFavs = [...new Set(favoriteJobs)]

  const deleteFavorite = (fav) => {
    setFavoriteJobs((prev) => prev.filter((favorite) => favorite !== fav))
  }

  return (
    <main className='py-32 px-10 flex flex-col items-center justify-center gap-6'>
      <h2 className='text-lg font-semibold'>Favorites</h2>
      <div>
        {uniqFavs.map((fav, i) => (
          <Link
            className='max-w-lg flex items-center justify-between'
            key={i}
            href={`/offer/${fav}`}
          >
            {fav}
            <button onClick={() => deleteFavorite(fav)}>X</button>
          </Link>
        ))}
      </div>
    </main>
  )
}
