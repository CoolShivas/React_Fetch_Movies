

const SingleList = ({dummyABC}) => {
  return <>
  <li> {dummyABC[0].id} </li>
    <li> {dummyABC[0].title} </li>
    <li> {dummyABC[0].openingText} </li>
    <li> {dummyABC[0].releaseDate} </li>
<hr />
    <li> {dummyABC[1].id} </li>
    <li> {dummyABC[1].title} </li>
    <li> {dummyABC[1].openingText} </li>
    <li> {dummyABC[1].releaseDate} </li>
  </>
}

export default SingleList