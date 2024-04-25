import Movies from "./Movies";
import classes from "./MoviesList.module.css";


const MoviesList = ({moviesABC, deleteInputMovieHandlerABC}) => {
  // console.log(moviesABC);// Here, we are able to access moviesABC;
  
  
  return <ul className={classes['movies-list']}>
    {moviesABC.map((arr)=>{
      return <Movies 
      idABC={arr.id}
      titleABC={arr.title}
      releaseDateABC={arr.releaseDate}
      openingTextABC={arr.openingText}
      deleteInputMovieHandlerXYZ={deleteInputMovieHandlerABC}
      ></Movies>
    })}
  </ul>
}

export default MoviesList; 