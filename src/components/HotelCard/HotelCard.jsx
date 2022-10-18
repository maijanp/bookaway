import { Link } from "react-router-dom";
import styles from "../HotelCard/HotelCard.module.css";

export default function hotelCard(props) {
  return (
    <div className={styles.hotelCard}>
      <h1>{props.hotel.name}</h1>
      <p>Destination: {props.hotel.location}</p>
      <p>{props.hotel.description}</p>
      <p>{props.hotel.facilities}</p>

      <div className={styles.imageContainer}>
        <img src={props.hotel.image} alt="" />
      </div>
      <Link to={`/hotels/${props.hotel.hotelId}`}>{props.cardLink}</Link>
    </div>
  );
}
