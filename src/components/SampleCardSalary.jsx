export default function SampleCardSalary({ title, dataJobs }) {
  return (
    <div className='p-6 bg-white shadow-lg rounded-xl flex flex-col gap-4 xl:p-8 xl:rounded-3xl xl:gap-6'>
      <h2 className='text-lg font-semibold xl:text-2xl'>{title}</h2>
      <div className='text-sm flex flex-col gap-2 xl:text-lg'>
        <p>
          Mínimo:{' '}
          <span className='font-medium'>
            {new Intl.NumberFormat('es-ES', {
              style: 'currency',
              currency: 'EUR'
            }).format(dataJobs.totalSalaryMin)}
          </span>
        </p>
        <p>
          Máximo:{' '}
          <span className='font-medium'>
            {new Intl.NumberFormat('es-ES', {
              style: 'currency',
              currency: 'EUR'
            }).format(dataJobs.totalSalaryMax)}
          </span>
        </p>
        <p>
          Promedio:{' '}
          <span className='font-medium'>
            {new Intl.NumberFormat('es-ES', {
              style: 'currency',
              currency: 'EUR'
            }).format(dataJobs.salaryAverage)}
          </span>
        </p>
      </div>
    </div>
  )
}
