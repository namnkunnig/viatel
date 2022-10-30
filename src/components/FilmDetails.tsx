export default function FilmDetails({ film }: FilmDetailsProps) {
  return (
    <>
      <div>{film && film.title}</div>
      <div>{film && film.id}</div>
    </>
  )
}

interface FilmDetailsProps {
  film: { id: number; title: string } | undefined
}
