import { useContext, useEffect, useRef } from 'react'
import { JobsContext } from '@/context/JobsContext'
import ButtonFavorite from './ButttonFavorite'
import SearchBar from './SearchBar'
import SampleCard from './SampleCard'
import SampleCardSalary from './SampleCardSalary'
import autoAnimate from '@formkit/auto-animate'

export default function JobTracker({ queryParam }) {
  const { query, succefull, firstSearch, dataJobs } = useContext(JobsContext)

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <>
      <SearchBar queryParam={queryParam} />

      <article
        ref={parent}
        className='w-full flex flex-col items-center justify-center gap-12 xl:gap-16'
      >
        {firstSearch ? (
          <p className='text-center text-black text-sm font-semibold lg:text-2xl 2xl:text-3xl'>
            Busca un empleo y revisa información a detalle
          </p>
        ) : (
          <>
            {succefull ? (
              <>
                {dataJobs && dataJobs.response ? (
                  <div className='flex flex-col items-center justify-center gap-4 lg:gap-6'>
                    <p className='text-center text-lg font-normal lg:text-xl 2xl:text-2xl'>
                      Total empleos:{' '}
                      <span className='font-semibold'>
                        {dataJobs.response.totalResults}
                      </span>
                    </p>
                    {succefull && (
                      <ButtonFavorite query={query || queryParam} />
                    )}
                  </div>
                ) : (
                  <p className='text-center text-black text-sm font-semibold lg:text-2xl 2xl:text-3xl'>
                    Busca un empleo y revisa información a detalle
                  </p>
                )}

                {dataJobs && dataJobs.response && (
                  <section className='max-w-7xl w-full grid grid-cols-1 text-left gap-6 sm:grid-cols-2 xl:gap-12'>
                    <SampleCardSalary
                      title='Promedio de Salarios'
                      dataJobs={dataJobs.salary}
                    />
                    <SampleCard
                      title='Experiencias requeridas más solicitadas'
                      dataJobs={dataJobs.experience}
                    />
                    <SampleCard
                      title='Compañías destacadas y que ofrecen más empleos'
                      dataJobs={dataJobs.company}
                    />
                    <SampleCard
                      title='Ubicaciones con mayor demanda'
                      dataJobs={dataJobs.location}
                    />
                    <SampleCard
                      title='Requisitos educativos más solicitados'
                      dataJobs={dataJobs.education}
                    />
                    <SampleCard
                      title='Tipos de trabajo más solicitados'
                      dataJobs={dataJobs.typeJob}
                    />
                  </section>
                )}
              </>
            ) : (
              <p className='text-center text-neutral-600 text-sm font-normal lg:text-2xl 2xl:text-3xl'>
                Sin resultados para:{' '}
                <span className='text-black font-semibold'>{`"${
                  query || queryParam || ''
                }"`}</span>
              </p>
            )}
          </>
        )}
      </article>
    </>
  )
}
