import { Film } from '../interfaces/apis'

export default function FilmList({ movies, setSelected }: FilmListProps) {
  return (
    <ul className="w-full overflow-hidden pl-10">
      {movies.map((film) => (
        <li onClick={() => setSelected(film.id)} key={film.id} className={`h-30 m-2 cursor-pointer rounded-lg border-[1px] border-gray-300 bg-white p-2 shadow-md`}>
          <h2 className="p-2 font-bold">{film.title}</h2>
          <p className="h-14 p-2 line-clamp-2">{film.overview}</p>
        </li>
      ))}
    </ul>
  )
}

interface FilmListProps {
  movies: Film[]
  setSelected: React.Dispatch<React.SetStateAction<number>>
}
