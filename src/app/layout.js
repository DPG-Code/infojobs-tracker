'use client'

import { FavIcon, HomeIcon } from '@/components/Icons'
import './globals.css'
import JobsContextProvider from '@/context/JobsContext'
import Link from 'next/link'

export const metadata = {
  title: 'JobsTracker',
  description: 'Infojobs Tracker'
}

export default function RootLayout({ children }) {
  return (
    <JobsContextProvider>
      <html lang='en'>
        <body className='flex flex-col relative'>
          <header className='z-50 w-full flex items-center justify-center fixed top-4'>
            <nav className='px-6 py-2 bg-white rounded-full shadow-xl'>
              <ul className='text-base text-black font-semibold flex items-center justify-center gap-4'>
                <li>
                  <Link
                    className='flex items-center justify-center gap-2'
                    href='/'
                  >
                    <HomeIcon />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className='flex items-center justify-center gap-2'
                    href='/favorites'
                  >
                    <FavIcon /> Favoritos
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className='h-12 w-full text-black text-xs font-medium flex items-center justify-center gap-2'>
            Desarrollado con la
            <a
              className='text-blue-500'
              href='https://developer.infojobs.net/'
              target='_blank'
            >
              Api de Infojobs
            </a>
          </footer>
        </body>
      </html>
    </JobsContextProvider>
  )
}
