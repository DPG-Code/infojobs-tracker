'use client'

import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { RemoveFavIcon } from '@/components/Icons'
import { JobsContext } from '@/context/JobsContext'

export default function Favorites() {
  const { favoriteJobs, setFavoriteJobs } = useContext(JobsContext)
  const parent = useRef(null)

  const uniqFavs = [...new Set(favoriteJobs)]

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const deleteFavorite = (fav) => {
    setFavoriteJobs((prev) => prev.filter((favorite) => favorite !== fav))
  }

  return (
    <main className='py-32 px-10 flex flex-col items-center justify-center gap-6'>
      <h2 className='text-xl font-semibold'>Favoritos</h2>
      {uniqFavs.length > 0 ? (
        <div
          ref={parent}
          className='w-ful grid grid-cols-1 place-content-center gap-6 md:grid-cols-2'
        >
          {uniqFavs.map((fav, i) => (
            <div
              key={i}
              className='w-52 text-black shadow-lg rounded-xl flex items-center justify-between gap-2 transition hover:bg-blue-500 hover:shadow-blue-300 hover:text-white'
            >
              <Link className='pl-4 py-4 w-full h-full' href={`/offer/${fav}`}>
                <span className='text-base font-medium'>{fav}</span>
              </Link>
              <button
                className='pr-4 py-4 w-auto h-full'
                onClick={() => deleteFavorite(fav)}
              >
                <RemoveFavIcon />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-sm font-normal flex items-center justify-center gap-2'>
          Encuentra empleos interesantes y agrégalos a tus favoritos para
          revisar la información detallada
        </p>
      )}
    </main>
  )
}
