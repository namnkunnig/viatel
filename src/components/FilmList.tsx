import { Film } from '../interfaces/apis'

export default function FilmList({ movies, setSelected }: FilmListProps) {
  return (
    <ul className="w-full overflow-hidden pl-10">
      {movies.map((film) => (
        <li onClick={() => setSelected(film.id)} key={film.id} className={`h-30 m-2 cursor-pointer rounded-lg border-[1px] border-gray-300 bg-white shadow-md`}>
          <div className="flex">
            <img className="w-[100px] rounded-l-lg" loading="lazy" src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${film.poster_path}`}></img>
            <div>
              <h2 className="p-2 font-bold">{film.title}</h2>
              <p className="h-14 p-2 line-clamp-2">{film.overview}</p>
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
