import styles from './ImageGallery.module.css'
export default function ImageGallery(props) {
    return(
        <div className={styles.gallery}>
            <div className={styles.galleryCol1}> <img className={styles.galleryImg} src={props.hotel.image.main} alt=""/></div>
            <div className={styles.galleryCol2}><div className={styles.imgContainer}> <img className={styles.galleryImg}src={props.hotel.image.secondary} alt=""/></div>
            <div className={styles.imgContainer}><img className={styles.galleryImg} src={props.hotel.image.third} alt=""/></div></div>
        </div>
    )
}