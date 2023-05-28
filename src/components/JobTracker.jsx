import { useContext, useEffect, useRef, useState } from 'react'
import { JobsContext } from '@/context/JobsContext'
import ButtonFavorite from './ButttonFavorite'
import SearchBar from './SearchBar'
import SampleCard from './SampleCard'
import { SearchJobIcon } from './Icons'
import SampleCardSalary from './SampleCardSalary'
import autoAnimate from '@formkit/auto-animate'

export default function JobTracker({ queryParam }) {
  const [succefull, setSuccefull] = useState(false)
  const { query, dataJobs } = useContext(JobsContext)

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <>
      <SearchBar queryParam={queryParam} setSuccefull={setSuccefull} />

      <article
        ref={parent}
        className='flex flex-col items-center justify-center gap-12'
      >
        {dataJobs && dataJobs.response ? (
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-center text-lg font-normal'>
              Total empleos:{' '}
              <span className='font-semibold'>
                {dataJobs.response.totalResults}
              </span>
            </p>
            {succefull && <ButtonFavorite query={query || queryParam} />}
          </div>
        ) : (
          <p className='text-center text-sm font-normal flex items-center justify-center gap-2'>
            Busca un empleo y revisa información a detalle
            <SearchJobIcon />
          </p>
        )}

        {dataJobs && dataJobs.response && (
          <section className='grid grid-cols-1 text-left gap-6 sm:grid-cols-2'>
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
      </article>
    </>
  )
}
