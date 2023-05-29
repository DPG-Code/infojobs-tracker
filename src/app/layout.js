'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import JobsContextProvider from '@/context/JobsContext'
import { FavIcon, HomeIcon } from '@/components/Icons'

// export const metadata = {
//   title: 'JobsTracker',
//   description:
//     'Descubre, sigue y organiza empleos con JobsTracker: encuentra oportunidades laborales, guarda tus favoritos y realiza un seguimiento de tus solicitudes. Impulsa tu carrera con esta herramienta completa de búsqueda de empleo.',
//   icons: {
//     icon: '/logo.webp'
//   }
// }

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <JobsContextProvider>
        <body className='min-h-screen flex flex-col justify-between relative'>
          <header className='z-50 w-full flex items-center justify-center fixed top-4 xl:top-8'>
            <nav className='px-6 py-2 bg-white rounded-full shadow-xl xl:px-10 xl:py-4'>
              <ul className='text-base text-black font-semibold flex items-center justify-center gap-6 xl:text-xl xl:gap-10'>
                <li>
                  <Link
                    className='flex items-center justify-center gap-2 xl:gap-3'
                    href='/'
                  >
                    <HomeIcon />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className='flex items-center justify-center gap-2 xl:gap-3'
                    href='/favorites'
                  >
                    <FavIcon /> Favoritos
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className='h-20 w-full text-black text-xs font-semibold flex items-center justify-center gap-2 lg:h-32 lg:text-lg 2xl:text-xl'>
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
      </JobsContextProvider>
    </html>
  )
}
