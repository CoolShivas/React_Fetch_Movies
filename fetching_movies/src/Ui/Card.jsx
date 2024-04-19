import classes from "./Card.module.css";

const Card = (props) => {

  return <div className={`${classes.card_container} ${props.className}`}> {props.children} </div>
}

export default Card