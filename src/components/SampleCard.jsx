export default function SampleCard({ title, dataJobs }) {
  return (
    <div className='p-6 max-w-lg bg-white shadow-lg rounded-xl flex flex-col gap-4'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <article className='flex flex-wrap gap-4'>
        {dataJobs.map((company, i) => (
          <p
            key={i}
            className='px-6 py-2 bg-neutral-200 text-black text-xs font-medium rounded-full'
          >
            {company}
          </p>
        ))}
      </article>
    </div>
  )
}
