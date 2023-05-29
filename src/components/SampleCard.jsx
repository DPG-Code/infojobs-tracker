export default function SampleCard({ title, dataJobs }) {
  return (
    <div className='p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 xl:p-8 xl:rounded-3xl xl:gap-6'>
      <h2 className='text-lg font-semibold xl:text-2xl'>{title}</h2>
      <article className='flex flex-wrap gap-4'>
        {dataJobs.map((company, i) => (
          <p
            key={i}
            className='px-6 py-2 bg-neutral-200 text-black text-xs font-medium rounded-full xl:text-base'
          >
            {company}
          </p>
        ))}
      </article>
    </div>
  )
}
