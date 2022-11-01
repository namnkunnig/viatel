import { Film } from '../interfaces/apis'

export default function FilmList({ movies, setSelected }: FilmListProps) {
  return (
    <ul className="w-full overflow-hidden">
      {movies.map((film) => (
        <li onClick={() => setSelected(film.id)} key={film.id} className={`h-30 mb-4 mt-1 cursor-pointer rounded-lg border-[1px] border-gray-300 bg-white shadow-md`}>
          <div className="flex">
            {film.poster_path && <img className="rounded-l-lg" loading="lazy" src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${film.poster_path}`}></img>}
            {!film.poster_path && <div className="w-[101px] flex-shrink-0 " />}
            <div className="p-4">
              <h2 className="font-bold">{film.title}</h2>
              <p className="mb-3 text-gray-500 ">{film.release_date}</p>
              <p className="h-13 line-clamp-2">{film.overview}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

interface FilmListProps {
  movies: Film[]
  setSelected: React.Dispatch<React.SetStateAction<number>>
}
