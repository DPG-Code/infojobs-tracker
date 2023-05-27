import { useContext } from 'react'
import { JobsContext } from '@/context/JobsContext'
import SearchBar from './SearchBar'
import SampleCard from './SampleCard'

export default function JobTracker({ queryParam }) {
  const { dataJobs } = useContext(JobsContext)

  return (
    <>
      <SearchBar queryParam={queryParam} />

      {dataJobs && dataJobs.response ? (
        <p className='text-lg font-medium'>
          Total de empleos:{' '}
          <span className='font-semibold'>
            {dataJobs.response.totalResults}
          </span>
        </p>
      ) : (
        <p className='text-lg font-medium'>
          Busca un empleo y revisa información a detalle
        </p>
      )}

      {dataJobs && dataJobs.response && (
        <section className='grid grid-cols-2 text-left gap-6'>
          <div className='p-6 max-w-lg bg-white shadow-xl rounded-xl flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Salarios</h2>
            <p className='text-sm'>Minimo: {dataJobs.salary.totalSalaryMin}</p>
            <p className='text-sm opacity-75'>
              Maximo: {dataJobs.salary.totalSalaryMax}
            </p>
            <p className='text-sm opacity-75'>
              Promedio: {dataJobs.salary.salaryAverage}
            </p>
          </div>

          <SampleCard
            title='Experiencia requerida'
            dataJobs={dataJobs.experience}
          />
          <SampleCard
            title='Compañias destacadas y que ofrecen mas empleos'
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
            title='Tipo de trabajo más solicitado'
            dataJobs={dataJobs.typeJob}
          />
        </section>
      )}
    </>
  )
}
