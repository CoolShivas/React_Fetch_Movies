
import MoviesList from "./components/Main/MoviesList";
import AppName from "./components/Header/AppName";

const Dummy_Movies = [
  {
    id : 1,
    title : 'Some Dummy Movie',
    openingText : 'This is the opening text of the movie',
    releaseDate : '2021-05-18',
  },
  {
    id : 2,
    title : 'Some Dummy Movie 2',
    openingText : 'This is the opening text of the movie',
    releaseDate : '2021-05-19',
  },
];

function App(){

  return <> 
  <header>
  <AppName></AppName>
  </header>
  <main>
    <MoviesList dummy={Dummy_Movies}></MoviesList>
  </main>
  <footer></footer>
  
   </>
}

export default App;