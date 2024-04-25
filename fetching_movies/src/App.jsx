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
      // const response = await fetch('https://fetchmovies-5c32f-default-rtdb.firebaseio.com/shivaji.json');
      const response = await fetch(
        "https://crudcrud.com/api/0d3d063e066f4b54b8b536e0b8b0e884/shivaji"
      );
      // const response = await axios.get(
      //   "https://crudcrud.com/api/79d78a3434a54b72a6fb11dc3e920c32/shivaji"
      // );

      // console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }

      const data = await response.json();
      // console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: data[key]._id,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
setMovies(loadedMovies);

      
    } 
    catch (err) {
      // console.log(err.message);
      setIsError(err.message);
      retryFetchFunc();
    }
    setIsLoading(false);
  }, []);



  useEffect(() => {
    handlerOnFetchMovies();
  }, []);

  const retryFetchFunc = () => {
    const timerID = setTimeout(() => {
      handlerOnFetchMovies();
    }, 5000);
    setRetryingTimer(timerID);
  };

  const cancelRetryFetchFunc = () => {
    clearTimeout(retryingTimer);
    setIsLoading(false);
    setRetryingTimer(null);
  };

  // Starting of Add new movies button handler;

  const addInputMovieHandler = async (title) => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/0d3d063e066f4b54b8b536e0b8b0e884/shivaji",
        {
          method: "POST",
          body: JSON.stringify(title),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      // console.log(data);
      // setMovies((prevData)=>[...prevData,data])
      handlerOnFetchMovies();
    } catch (error) {
      console.log(error);
    }
  };

  // Ending of Add new movies button handler ;

  // Starting of Delete new movies button handler ;


  const deleteInputMovieHandler = async (id) => {
    console.log("hello",id);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/0d3d063e066f4b54b8b536e0b8b0e884/shivaji/${id}`, 
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      const filterValue = movies.filter((crr)=> crr._id !== id);
      setMovies(filterValue);
      // console.log(data);
  
    } catch (error) {
      console.log(error);
    }
     // After successful deletion, refetch the movies
     handlerOnFetchMovies();
  };

  // Ending of Delete new movies button handler ;

  // Starting If-Else Conditional Rendering

  let content = <p className={classes.para_conditional}> Found no movies </p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        moviesABC={movies}
        deleteInputMovieHandlerABC={deleteInputMovieHandler}
      ></MoviesList>
    );
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

        {content}
        
      </main>
      <footer></footer>
    </>
  );
}

export default App;
