import { useEffect, useState } from 'react'
import FilmDetails from '../components/FilmDetails'
import FilmList from '../components/FilmList'
import TextInput from '../components/TextInput'
import { Film } from '../interfaces/apis'

export default function FilmPage() {
  const [query, setQuery] = useState('a')
  const [selected, setSelected] = useState(0)
  const [films, setFilms] = useState<[Film] | []>([])

  useEffect(() => {
    if (query === '') {
      setFilms([])
      return
    }
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=26f1011b4b59a06ef4254f92497037b5&query=${query}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.results) {
          setFilms(data.results)
        }
      })
  }, [query])

  const movieList = films.slice(0, 15).filter((film) => film.title.toLowerCase().includes(query.toLowerCase()))
  return (
    <main className="bg-slate-100 text-black">
      <div className="fixed -z-10 h-screen w-full bg-slate-100"></div>
      <TextInput label="Search" name="query" onChange={(value) => setQuery(value)} />
      <div className="columns-2 gap-10 pt-10">
        <div className="flex-1">
          <FilmList movies={movieList} setSelected={setSelected} />
        </div>
        <FilmDetails film={movieList.filter((film) => film.id === selected).pop()} />
      </div>
    </main>
  )
}
