import styles from "../HotelCard/HotelCard.module.css";
import Btn from "../button/button"


export default function hotelCard(props) {
  return (
    <div className={styles.hotelCard}>

      <div className={styles.imageContainer}>
        <img src={props.hotel.image.main} alt="" />
      </div>
        <div className={styles.infoWrapper}>
            <div className={styles.textWrapper}>
              <div className="headlineContainer">
                  <h1>{props.hotel.name}</h1>
                  <h2>{props.hotel.location}</h2>
              </div>
              <p>{props.hotel.facilities}</p>
            </div>
            <div className={styles.bottomSection}>
              <div className={styles.price}>
                <p>Fr. {props.hotel.price.adults}/person</p>
                      <Btn
                      btnLabel="Läs mer"
                      btnUrl={`/hotels/${props.hotel.hotelId}`}>{props.cardLink}</Btn>
              </div>
            </div>
        </div>
    </div>
  );
}
