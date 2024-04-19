

const MoviesList = ({dummy}) => {
  return <>
  <ul>
    <li> {dummy[0].id} </li>
    <li> {dummy[0].title} </li>
    <li> {dummy[0].openingText} </li>
    <li> {dummy[0].releaseDate} </li>
<hr />
    <li> {dummy[1].id} </li>
    <li> {dummy[1].title} </li>
    <li> {dummy[1].openingText} </li>
    <li> {dummy[1].releaseDate} </li>
  </ul>
  </>
}

export default MoviesList