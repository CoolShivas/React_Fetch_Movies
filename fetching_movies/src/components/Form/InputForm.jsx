// import { useState } from "react";
// import classes from "./InputForm.module.css";

// const InputForm = ({handlerOnFixTitleABC}) => {

//   const [titleVal, setTitleVal] = useState();
//   const [openingTextVal, setOpeningTextVal] = useState();
//   const [releaseDateVal, setReleaseDateVal] = useState();

//   const handlerOnTitleVal = (event) =>{
//     console.log(event.target.value);
//     setTitleVal(event.target.value);
//   };

//   const handlerOnOpeningTextVal = (event) =>{
//     console.log(event.target.value);
//     setOpeningTextVal(event.target.value);
//   };

//   const handlerOnReleaseDateVal = (event) =>{
//     console.log(event.target.value);
//     setReleaseDateVal(event.target.value);
//   };

//   const handlerOnSubmit = () =>{
//     console.log("submit btn clicked");
//     handlerOnFixTitleABC(titleVal, openingTextVal,releaseDateVal);
//   };

//   return <div className={classes.input_form__div}>
//    <form onSubmit={handlerOnSubmit()}>
//    <div>
//    <label htmlFor="title"> Title </label>
//     <input type="text" className="form-control" id="title" name="title" onChange={handlerOnTitleVal}/>
//    </div>
//    <div>
//    <label htmlFor="opText"> Opening Text </label>
//     <textarea name="opText" id="opText" cols="30" rows="5" onChange={handlerOnOpeningTextVal}></textarea>
//    </div><div>
//    <label htmlFor="reDate"> Release Date </label>
//     <input type="date" className="form-control" id="reDate" name="reDate" onChange={handlerOnReleaseDateVal}/>
//    </div>
//    <div>
//     <button type="submit"> Add Movie </button>
//    </div>

//   </form>
//    </div>
  
// }

// export default InputForm

import { useRef } from "react";
import classes from "./InputForm.module.css";

 
const InputForm = ({addInputMovieHandlerABC}) => {

  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const handlerOnSubmit = (event) =>{
    event.preventDefault();
    console.log("submit btn clicked");

     const newMovies = {
    title : titleRef.current.value,
    openingText : openingTextRef.current.value,
    releaseDate : releaseDateRef.current.value,
   }
   addInputMovieHandlerABC(newMovies);
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
      <input type="text" id="release-date" name="release-date" ref={releaseDateRef}/>
    </div>

    <div className="btn_add__movie">
      <button> Add Movie </button>
    </div>
  </form>
  </div>
}

export default InputForm