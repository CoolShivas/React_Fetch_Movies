import SingleList from "./SingleList"

const MoviesList = ({dummy}) => {
  return <>
  {dummy.map((arr)=>{
    return <ul key={arr.id}>
      {/* <li key={arr.id}> {arr.id} - {arr.title} - {arr.openingText} - {arr.releaseDate}  </li> */}
      <li> {arr.id} </li>
      <li> {arr.title} </li>
      <li> {arr.openingText} </li>
      <li> {arr.releaseDate} </li>
    </ul>
  })}
  </>
}

export default MoviesList