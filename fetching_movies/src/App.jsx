import LoadingSpinner from "./components/Main/LoadingSpinner";
import classes from "./App.module.css";
import { useEffect, useState } from "react";
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

function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(null);

  useEffect(()=>{
    console.log("Interval has been setup");
    // Previously, the useState hook re-rendering the data again and again. If you notice that when you click on refresh the page. The data gone and clicking on the button it fetched by the useState. So, to over-come from re-rendering we will use the useEffect hook it will render the data once only and also provide the dependencies if any changes happen it will re-render automaticall or again. UseEffect will fetch data immediately will refreshing without clicking on the fetch button i.e, why it is used.
    const intervalId = setTimeout(()=>{
      fetchMoviesHandler();
    },5000);
    
    return ()=>{
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };

  },[]);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      // To check the error use the second link because it is the false link to get the output as Something went wrong;
      // const response = await fetch("https://swapi.dev/api/film/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p className={classes.para_conditional}> Found no movies </p>;

  if (movies.length > 0) 
  {
    content = <MoviesList moviesABC={movies}></MoviesList>;
  } 
  else if (isError) 
  {
    content = (
      <p className={classes.para_conditional}> Something went wrong! </p>
    );
  } 
  else if (isLoading) 
  {
    // content = <p className={classes.para_loading}> Loading...... </p>;
    content = <LoadingSpinner/>
  }


  return (
    <>
      <header>
        <AppName fetchMoviesHandlerABC={fetchMoviesHandler}></AppName>
      </header>

      <main>
        {/* {!isLoading && movies.length > 0 &&  <MoviesList moviesABC={movies}></MoviesList>}
    
    {!isLoading && movies.length === 0 && !isError &&  <p className={classes.para_conditional}> Found no movies </p> }
    
    {!isLoading &&  isError && <p className={classes.para_conditional}> Something went wrong! </p> }

    {isLoading && <p className={classes.para_loading}> Loading...... </p> } */}

        {content}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
