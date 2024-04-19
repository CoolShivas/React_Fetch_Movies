
import axios from "axios";
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

  const fetchMoviesHandler = () =>{
    fetch('https://swapi.dev/api/films/')
    .then((response)=>{
      // console.log(response.json());
      return response.json();
    })
    .then((data)=>{
      console.log(data.results);
      const transformedMovies = data.results.map((movieData)=>{
        return {
          id : movieData.episode_id,
          title : movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate:movieData.release_date,
        }
      })
      setMovies(transformedMovies);
    })

  }

  
  return <> 
  <header>
  <AppName fetchMoviesHandlerABC={fetchMoviesHandler}></AppName>
  </header>
  <main>
    <MoviesList moviesABC={movies}></MoviesList>
  </main>
  <footer></footer>
  
   </>
}

 export default App;