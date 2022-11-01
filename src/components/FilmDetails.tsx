import { Credits, Details } from '../interfaces/apis'

export default function FilmDetails({ details, credits }: FilmDetailsProps) {
  const director = credits?.crew.filter((crew) => crew.job === 'Director').pop()
  const writer = credits?.crew.filter((crew) => crew.job === 'Screenplay' || crew.job === 'Writer').pop()
  return (
    <>
      {details && (
        <section className="mt-1 flex-1 rounded-lg border-[1px] border-gray-300 bg-white p-8 shadow-md">
          <header className="mb-2 pt-4 text-3xl font-bold">
            {details && details.title} ({details.release_date.slice(0, 4)})
          </header>
          <div className="mb-4">User rating: {details.vote_average.toFixed(1)}</div>
          <h2 className="mb-1 font-bold">Overview</h2>
          <div className="mb-6">{details && details.overview}</div>
          <div className="flex justify-start gap-5">
            <div>
              <h2 className="mb-1 font-bold">Direction</h2>
              <p>{director?.name}</p>
            </div>
            <div>
              <h2 className="mb-1 font-bold">Screenplay</h2>
              <p>{writer?.name}</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

interface FilmDetailsProps {
  details: Details | null
  credits: Credits | null
}
