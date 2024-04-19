import Movies from "./Movies";
import classes from "./MoviesList.module.css";


// const MoviesList = ({dummy}) => {
//   return <div className={classes.movies_list__div}>
    
//     {dummy.map((arr)=>{
//     return <ul key={arr.id} className={classes.ul_tag__div}>
//       {/* <li key={arr.id}> {arr.id} - {arr.title} - {arr.openingText} - {arr.releaseDate}  </li> */}
//       {/* <li> {arr.id} </li> */}
//       <li className={classes.title_div}> {arr.title} </li>
//       <li className={classes.openingText_div}> {arr.openingText} </li>
//       {/* <li> {arr.releaseDate} </li> */}
//     </ul>
//   })}
//     </div>
  
// }

// export default MoviesList;





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