import Movies from "./components/Movies"

function App() {
  const movies = [
    "Bloodsport",
     "Aliens",
     "Terminator 2",
     "Rocky"
  ]

  const actors = [
    "Van Damme",
    "Alien",
    "Arnold",
    "Sly"
  ]

  return (
    <>
     <Movies movies={movies} actors={actors}/>
    </>
  )
}

export default App
