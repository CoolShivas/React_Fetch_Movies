
import InputForm from "./components/Form/InputForm";
import LoadingSpinner from "./components/Main/LoadingSpinner";
import classes from "./App.module.css";
import { useCallback, useEffect, useState } from "react";
import MoviesList from "./components/Main/MoviesList";
import AppName from "./components/Header/AppName";
let timer = null;

function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(null);

  const [isError, setIsError] = useState(null);

  const [retryingTimer, setRetryingTimer] = useState(null);

  

  const handlerOnFetchMovies = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    // setRetryingTimer(false);
    try {
      const response = await fetch('https://fetchmovies-5c32f-default-rtdb.firebaseio.com/shivaji.json');
      // const response = await fetch("https://crudcrud.com/api/159486bbf7c845c7928b21b31766df71/shivaji");
     
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }

      const data = await response.json();
      console.log(data);

      // const transformedMovies = data.results.map((arr) => {
      //   return {
      //     id: arr.episode_id,
      //     title: arr.title,
      //     openingText: arr.opening_crawl,
      //     releaseDate: arr.release_date,
      //   };
      // });
      // setMovies(transformedMovies);
      // console.log(transformedMovies);

      const loadedMovies = [];

      for(const key in data){
        loadedMovies.push({
          id : key,
          title : data[key].title,
          openingText: data[key].openingText,
          releaseDate:data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);

    } catch (err) {
      console.log(err.message);
      setIsError(err.message);
       retryFetchFunc();
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    handlerOnFetchMovies();

    // timer = setInterval(()=>{
    //   handlerOnFetchMovies();
    // },5000);
    // setRetryingTimer(stopRetrying);
  }, []);

  const retryFetchFunc = () => {
    const timerID = setTimeout(() => {
      handlerOnFetchMovies();
    }, 5000);
    setRetryingTimer(timerID);
  };

  const cancelRetryFetchFunc = () => {
    clearTimeout(retryingTimer);
    // clearInterval(timer);?
    setIsLoading(false);
  };

// Starting of Add new movies button handler

 // const handlerOnFixTitle = (tile, opText, reDate) =>{
  //   console.log(`printing the title ${tile} opening Text ${opText} reDate ${reDate}`);

  //   // const newData = [...movies,{
  //   //   id: Math.random(),
  //   //   title: tile,
  //   //   openingText: opText,
  //   //   releaseDate: reDate,
  //   // }];
  //   // setFixTitle(newData);
  // };

  const addInputMovieHandler = async(latestMovies) =>{
    console.log(latestMovies);
    const response = await fetch("https://fetchmovies-5c32f-default-rtdb.firebaseio.com/shivaji.json",{
      method : 'POST',
      body : JSON.stringify(latestMovies),
      headers:{
        "Content-Type" : "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  };

// Ending of Add new movies button handler

  // Starting If-Else Conditional Rendering

  let content = <p className={classes.para_conditional}> Found no movies </p>;

  if (movies.length > 0) {
    content = <MoviesList moviesABC={movies}></MoviesList>;
  } else if (isLoading) {
    content = (
      <p className={classes.para_loading}>
        <LoadingSpinner />
      </p>
    );
  } else if (isError) {
    content = (
      <p className={classes.para_error}>
        {isError}
        <button onClick={cancelRetryFetchFunc}> Cancel </button> 
      </p>
    );
  }

  // Ending If-Else Conditional Rendering

 

  return (
    <>
      <header>
        <InputForm addInputMovieHandlerABC={addInputMovieHandler}></InputForm>
        <AppName handlerOnFetchMoviesABC={handlerOnFetchMovies}></AppName>
      </header>

      <main>
        {/* <MoviesList moviesABC={movies}></MoviesList> */}

        {/* Starting of Single Line Conditional Rendering */}

        {/* {!isLoading && movies.length > 0 && (
          <MoviesList moviesABC={movies}></MoviesList>
        )}

        {!isLoading && movies.length === 0 && (
          <p className={classes.para_conditional}> Found no movies </p>
        )} 


        {isLoading && <p className={classes.para_loading}> Loading...... </p>}

        {!isLoading && isError && <p className={classes.para_error}> {isError} </p>} */}

        {/* Ending of Single Line Conditional Rendering */}

        {content}

      </main>
      <footer></footer>
    </>
  );
}

export default App;
