export default function FilmList({ movies, setSelected }: FilmListProps) {
  return (
    <ul className="pl-10">
      {movies.map((film: { id: number; title: string }) => (
        <li onClick={() => setSelected(film.id)} key={film.id} className={`cursor-pointer`}>
          {film.title}
        </li>
      ))}
    </ul>
  )
}

interface FilmListProps {
  movies: { id: number; title: string }[]
  setSelected: React.Dispatch<React.SetStateAction<number>>
}
