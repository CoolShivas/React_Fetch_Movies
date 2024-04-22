import Movies from "./Movies";
import classes from "./MoviesList.module.css";


const MoviesList = (props) => {
  return <ul className={classes['movies-list']}>
    {props.moviesABC.map((arr)=>{
      return <Movies 
      title={arr.title}
      releaseDate={arr.release}
      openingText={arr.openingText}
      ></Movies>
    })}
  </ul>
}

export default MoviesList 