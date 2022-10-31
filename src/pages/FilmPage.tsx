import { useEffect, useState } from 'react'
import FilmDetails from '../components/FilmDetails'
import FilmList from '../components/FilmList'
import TextInput from '../components/TextInput'
import { Film, FilmLong } from '../interfaces/apis'

export default function FilmPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [films, setFilms] = useState<[Film] | []>([])
  const [film, setFilm] = useState<FilmLong | null>(null)

  useEffect(() => {
    updateFilmList()
  }, [query])

  useEffect(() => {
    updateFilmDetails()
  }, [selected])

  const movieList = films.slice(0, 15).filter((film) => film.title.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="flex w-full justify-center">
      <main className="w-[1000px] bg-transparent text-black">
        <TextInput label="Search" name="query" onChange={(value) => setQuery(value)} />
        <div className="columns-2 gap-10 pt-10">
          <div className="flex-1">
            <FilmList movies={movieList} setSelected={setSelected} />
          </div>
          <div className="flex-1 pt-1">
            <FilmDetails film={film} />
          </div>
        </div>
      </main>
      <div className="fixed -z-10 h-screen w-full bg-slate-200"></div>
    </div>
  )

  async function updateFilmList() {
    if (query === '') {
      setFilms([])
      setFilm(null)
      return
    }
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=26f1011b4b59a06ef4254f92497037b5&query=${query}`).then((result) => result.json())
    setFilms(data.results as [Film])
  }

  async function updateFilmDetails() {
    if (selected === 0) {
      setFilms([])
      return
    }
    const data = await fetch(`https://api.themoviedb.org/3/movie/${selected}?api_key=26f1011b4b59a06ef4254f92497037b5`).then((result) => result.json())
    console.log(data)
    setFilm(data as FilmLong)
  }
}
