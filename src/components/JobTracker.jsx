import { useContext } from 'react'
import { JobsContext } from '@/context/JobsContext'
import SearchBar from './SearchBar'

export default function JobTracker() {
  const { dataJobs } = useContext(JobsContext)

  console.log(dataJobs)

  return (
    <>
      <SearchBar />

      {dataJobs && dataJobs.response ? (
        <p>Total de empleos: {dataJobs.response.totalResults}</p>
      ) : (
        <p>Busca un empleo y revisa información a detalle</p>
      )}

      {dataJobs && dataJobs.response && (
        <section className='grid grid-cols-2 text-left gap-2'>
          <div className='px-5 py-4'>
            <h2 className='mb-3 text-lg font-semibold'>Experiencia</h2>
            {dataJobs.experience.map((time, i) => (
              <p key={i} className='text-sm opacity-75'>
                {time}
              </p>
            ))}
          </div>

          <div className='px-5 py-4'>
            <h2 className='mb-3 text-lg font-semibold'>Salarios</h2>
            <p className='text-sm opacity-75'>
              Minimo: {dataJobs.salary.totalSalaryMin}
            </p>
            <p className='text-sm opacity-75'>
              Maximo: {dataJobs.salary.totalSalaryMax}
            </p>
            <p className='text-sm opacity-75'>
              Promedio: {dataJobs.salary.salaryAverage}
            </p>
          </div>

          <div className='px-5 py-4'>
            <h2 className='mb-3 text-lg font-semibold'>
              Compañias destacadas y que ofrecen mas empleos
            </h2>
            {dataJobs.company.map((company, i) => (
              <p key={i} className='text-sm opacity-75'>
                {company}
              </p>
            ))}
          </div>

          <div className='px-5 py-4'>
            <h2 className='mb-3 text-lg font-semibold'>
              Ubicaciones con mayor demanda
            </h2>
            {dataJobs.location.map((location, i) => (
              <p key={i} className='text-sm opacity-75'>
                {location}
              </p>
            ))}
          </div>

          <div className='px-5 py-4'>
            <h2 className='mb-3 text-lg font-semibold'>
              Requisitos educativos más solicitados
            </h2>
            {dataJobs.education.map((level, i) => (
              <p key={i} className='text-sm opacity-75'>
                {level}
              </p>
            ))}
          </div>

          <div className='px-5 py-4'>
            <h2 className='mb-3 text-lg font-semibold'>
              Tipo de trabajo más solicitado
            </h2>
            <p className='text-sm opacity-75'>{dataJobs.typeJob}</p>
          </div>
        </section>
      )}
    </>
  )
}
