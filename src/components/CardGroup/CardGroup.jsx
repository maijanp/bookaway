import { Card } from "react-bootstrap";
import styles from "./CardGroup.module.css"

export default function CardGroup(props){
    return(
        <div className={styles.wrapper}>
            <Card style={{width:"30%", marginRight:"5px", marginLeft:"5px" }}>
          <Card.Img className={styles.cardImg} variant="top" src={props.card1Img} />
          <Card.Body>
            <Card.Title>{props.card1Title}</Card.Title>
           
              <div className={styles.linkContainer}><a href={props.card1Url}>{props.card1LinkText}</a></div>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "30%", marginRight:"5px", marginLeft:"5px" }}>
          <Card.Img className={styles.cardImg} variant="top" src={props.card2Img} />
          <Card.Body>
            <Card.Title>{props.card2Title}
            </Card.Title>
            <Card.Text>
             {props.card2Text}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "30%", marginRight:"5px", marginLeft:"5px" }}>
          <Card.Img className={styles.cardImg} variant="top" src={props.card3Img} />
          <Card.Body>
            <Card.Title>{props.card3Title}</Card.Title>
            <Card.Text>
              {props.card3Text}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    )
}