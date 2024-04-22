import classes from "./AppName.module.css";

// const AppName = () => {
//   return <div className={classes.btn_first__div}>
//     <div className={classes.btn_second__div}>
//       <button> Fetching Movies </button>
//     </div>
//   </div>
// }

// export default AppName




const AppName = ({handlerOnFetchMoviesABC}) => {

  const handlerOnClick = () =>{
    console.log("fetch btn clicked");
    handlerOnFetchMoviesABC();
  };

  return <div className={classes.btn_first__div}>
    <div className={classes.btn_second__div}>
      {/* <button onClick={fetchMoviesHandlerABC}> Fetching Movies </button> */}
      <button onClick={handlerOnClick}> Fetching Movies </button>
    </div>
  </div>
}

export default AppName