import { FilmLong } from '../interfaces/apis'

export default function FilmDetails({ film }: FilmDetailsProps) {
  return (
    <>
      {film && (
        <section className="mt-1 mr-12 flex-1 rounded-lg border-[1px] border-gray-300 bg-white p-4 shadow-md">
          <header className="mb-4 pt-4 text-3xl font-bold">
            {film && film.title} ({film.release_date.slice(0, 4)})
          </header>
          <div className="mb-4">User rating: {film.vote_average}</div>
          <h1 className="mb-2 font-bold">Overview</h1>
          <div>{film && film.overview}</div>
        </section>
      )}
    </>
  )
}

interface FilmDetailsProps {
  film: FilmLong | undefined
}
