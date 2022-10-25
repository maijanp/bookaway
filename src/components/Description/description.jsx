import styles from "./Description.module.css";
import Btn from "../button/button";

export default function Description(props) {
  return (
   <div className={styles.descriptionWrapper}>
      <div className={styles.row}>
          <div className={styles.introWrapper}>
            <div className={styles.introTop}>
                <h2>{props.hotel.name}</h2> <Btn btnUrl="/hotels/:id/booking"
                btnLabel="Boka"></Btn>
            </div>
            <h3>{props.hotel.location}</h3>
            <p>{props.hotel.description}</p>
          
          </div>
          <div className={styles.factBoxContainer}>
            <h3>Fakta om hotellet</h3>
            <li>Pool: 3st</li>
            <li>Strand: 50m</li>
            <li>Centrum: 400m</li>
            <li>Restaurang: Ja</li>
            <li>WiFi: Ja</li>
            <li>Vattenrutchbana: Ja</li>
            <li>Spa: Ja</li>
          </div>
      </div>
      <div className={styles.highlightsContainer}>
        <h3>Hotellets höjdpunkter</h3>
        <div className={styles.row}>
            <div className={styles.col}>
              <ul>
                <li> <span id={styles.li1}></span>Transfer till och från flygplatsen</li>
                <li> <span id={styles.li2}></span>All Inclusive</li>
                <li> <span id={styles.li3}></span>Reception 24h</li>
              </ul>
            </div>
            <div className={styles.col}>
              <ul>
                <li> <span id={styles.li4}></span>Gratis solstolar vid stranden</li>
                <li> <span id={styles.li5}></span>Stort utbud av utflykter</li>
                <li> <span id={styles.li6}></span>Gratis cykeluthyrning</li>
              </ul>
            </div>
        </div>
      </div>

      </div>
  );
}
