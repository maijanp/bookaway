import { Card } from "react-bootstrap";
import styles from "./CardGroup.module.css";

//Skapar och exporterar komponenten CardGroup och tillderar klasser för styling
export default function CardGroup(props) {
  return (
    <div className={styles.wrapper}>
      <Card style={{ width: "30%" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "x-large" }}>
          {props.card1Title}
        </Card.Title>
        <Card.Img
          className={styles.cardImg}
          variant="top"
          src={props.card1Img}
        />
        <Card.Body>
          <div className={styles.linkContainer}>
            <a href={props.card1Url}>{props.card1LinkText}</a>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "30%" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "x-large" }}>
          {props.card2Title}
        </Card.Title>
        <Card.Img
          className={styles.cardImg}
          variant="top"
          src={props.card2Img}
        />
        <Card.Body>
          <div className={styles.linkContainer}>
            <a href={props.card2Url}>{props.card2LinkText}</a>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "30%" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "x-large" }}>
          {props.card3Title}
        </Card.Title>
        <Card.Img
          className={styles.cardImg}
          variant="top"
          src={props.card3Img}
        />
        <Card.Body>
          <div className={styles.linkContainer}>
            <a href={props.card3Url}>{props.card3LinkText}</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
