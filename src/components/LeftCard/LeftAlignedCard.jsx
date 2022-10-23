import styles from "./LeftAlignedCard.module.css"

export default function LeftAlignedCard(props){
    return(
    <div className={styles.cardWrapper}>
        <div className={styles.imgContainer}>
            <img src={props.imgUrl} alt="" />
        </div>
        <div className={styles.infoContainer}>
            <div className={styles.topSection}>
                <h3>{props.cardTitle}</h3>
                <p>{props.cardParagraph1}</p>
                <p>{props.cardParagraph2}</p>

            </div>
            <div className={styles.bottomSection}>
            <a href={props.cardLinkUrl}>{props.cardLinkText}</a>
            </div>
        </div>
    </div>
    )
}