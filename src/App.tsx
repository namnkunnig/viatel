import { useEffect, useState } from 'react'
import FilmDetails from './components/FilmDetails'
import FilmList from './components/FilmList'
import TextInput from './components/TextInput'

function App() {
  const [query, setQuery] = useState('a')
  const [selected, setSelected] = useState(0)
  const [topRated, setTopRated] = useState<[{ id: number; title: string }]>([{ id: 0, title: 'foo' }])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=26f1011b4b59a06ef4254f92497037b5&query=${query}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.results) {
          setTopRated(data.results)
        }
      })
  }, [query])

  const movieList = topRated.slice(0, 10).filter((film) => film.title.toLowerCase().includes(query.toLowerCase()))
  return (
    <main className="h-screen bg-slate-900 text-white">
      <TextInput label="Search" name="query" onChange={(value) => setQuery(value)} />
      <div className="flex flex-row justify-between px-20">
        <FilmList movies={movieList} setSelected={setSelected} />
        <FilmDetails film={movieList.filter((film) => film.id === selected).pop()} />
      </div>
    </main>
  )
}

export default App
