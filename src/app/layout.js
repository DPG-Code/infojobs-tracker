'use client'

import JobsContextProvider from '@/context/JobsContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Infojobs Tracker',
  description: 'Infojobs Tracker'
}

export default function RootLayout({ children }) {
  return (
    <JobsContextProvider>
      <html lang='en'>
        <body className={inter.className}>
          <header className='w-full h-12 flex items-center justify-center text-sm'>
            <nav>
              <ul>
                <li>HEADER</li>
              </ul>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </JobsContextProvider>
  )
}
