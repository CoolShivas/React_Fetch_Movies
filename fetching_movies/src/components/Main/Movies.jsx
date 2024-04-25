import classes from "./Movies.module.css";

const Movies = ({idABC, titleABC, releaseDateABC, openingTextABC,deleteInputMovieHandlerXYZ}) => {
  // console.log(idABC);// Here, we are able to access the idABC;
 

  const handlerOnDeleteBtn = () =>{
  
    deleteInputMovieHandlerXYZ(idABC);
    // console.log(deleteInputMovieHandlerXYZ(idABC));// Here, promise is completed;
  };

  return <li className={classes.movies_updates}>
    <h2> {titleABC} </h2>
    <h3> {releaseDateABC} </h3>
    <p> {openingTextABC} </p>
    <button className={classes.del_btn__movies}
    onClick={handlerOnDeleteBtn}
    > Delete </button>
  </li>
}

export default Movies;