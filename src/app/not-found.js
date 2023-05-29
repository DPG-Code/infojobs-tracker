import { ArrowLeftIcon } from '@/components/Icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='my-auto px-12 flex flex-col items-center justify-center gap-6 lg:gap-12'>
      <h2 className='text-center text-2xl font-semibold lg:text-6xl'>
        No hemos encontrado esta página
      </h2>
      <p className='text-center text-sm font-medium lg:text-2xl'>
        No te preocupes, regresa y busca otras ofertas.
      </p>
      <Link
        className='px-4 py-1 bg-blue-500 border-blue-500 text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 transition hover:shadow-lg hover:shadow-blue-300 lg:text-lg xl:gap-3 xl:px-10 xl:py-2 xl:text-xl'
        href='/'
      >
        <ArrowLeftIcon />
        Página principal
      </Link>
    </main>
  )
}
