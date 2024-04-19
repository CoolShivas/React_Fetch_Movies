import classes from "./AppName.module.css";

// const AppName = () => {
//   return <div className={classes.btn_first__div}>
//     <div className={classes.btn_second__div}>
//       <button> Fetching Movies </button>
//     </div>
//   </div>
// }

// export default AppName




const AppName = ({fetchMoviesHandlerABC}) => {
  return <div className={classes.btn_first__div}>
    <div className={classes.btn_second__div}>
      <button onClick={fetchMoviesHandlerABC}> Fetching Movies </button>
    </div>
  </div>
}

export default AppName