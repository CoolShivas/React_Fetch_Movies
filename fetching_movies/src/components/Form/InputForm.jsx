
import { useRef } from "react";
import classes from "./InputForm.module.css";

 
const InputForm = ({addInputMovieHandlerABC}) => {

  
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const handlerOnSubmit = (event) =>{
    event.preventDefault();
    // console.log("submit btn clicked");

     const newMovies = {
      id : Math.random(),
    title : titleRef.current.value,
    openingText : openingTextRef.current.value,
    releaseDate : releaseDateRef.current.value,
   }
   addInputMovieHandlerABC(newMovies);
   titleRef.current.value = "";
   openingTextRef.current.value = "";
   releaseDateRef.current.value = "";
  };


  return <div className={classes.input_form__div}>
    <form onSubmit={handlerOnSubmit}>
    <div className={classes.control}>
      <label htmlFor="title"> Title </label>
      <input type="text" id="title" name="title" ref={titleRef}/>
    </div>

    <div className={classes.control}>
      <label htmlFor="opening-text"> Opening Text </label>
      <textarea name="opening-text" id="opening-text"  rows="5" ref={openingTextRef}></textarea>
    </div>

    <div className={classes.control}>
      <label htmlFor="release-date"> Release Date </label>
      <input type="date" id="release-date" name="release-date" ref={releaseDateRef}/>
    </div>

    <div className="btn_add__movie">
      <button type="submit" className={classes.btn_add__movies}> Add Movie </button>
    </div>
  </form>
  </div>
}

export default InputForm