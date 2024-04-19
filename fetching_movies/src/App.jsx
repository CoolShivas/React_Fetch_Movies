import classes from "./App.module.css";
import { useState } from "react";
import MoviesList from "./components/Main/MoviesList";
import AppName from "./components/Header/AppName";


// const Dummy_Movies = [
//   {
//     id : 1,
//     title : 'Some Dummy Movie',
//     openingText : 'This is the opening text of the movie',
//     releaseDate : '2021-05-18',
//   },
//   {
//     id : 2,
//     title : 'Some Dummy Movie 2',
//     openingText : 'This is the opening text of the movie',
//     releaseDate : '2021-05-19',
//   },
// ];

// function App(){

//   return <> 
//   <header>
//   <AppName></AppName>
//   </header>
//   <main>
//     <MoviesList dummy={Dummy_Movies}></MoviesList>
//   </main>
//   <footer></footer>
  
//    </>
// }

// export default App;




function App(){

  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async() =>{
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json();

    const transformedMovies = data.results.map((movieData)=>{
      return {
        id : movieData.episode_id,
        title : movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate:movieData.release_date,
      }
    })
    setMovies(transformedMovies);
    setIsLoading(false);
  }

  
  return <> 
  <header>
  <AppName fetchMoviesHandlerABC={fetchMoviesHandler}></AppName>
  </header>
  <main>
    {!isLoading && <MoviesList moviesABC={movies}></MoviesList>}
    {isLoading && <p className={classes.para_loading}> Loading...... </p> }
  </main>
  <footer></footer>
  
   </>
}

 export default App;