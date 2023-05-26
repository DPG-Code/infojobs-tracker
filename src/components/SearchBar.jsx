export default function SearchBar({ query, setQuery, getData }) {
  return (
    <form
      className='w-full flex flex-col items-center justify-center'
      onSubmit={(e) => {
        e.preventDefault()
        getData()
      }}
    >
      <input
        className='px-4 border border-black rounded-full'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
