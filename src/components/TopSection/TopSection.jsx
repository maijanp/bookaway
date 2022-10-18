
import styles from './TopSection.module.css'

export default function Nav(props) {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}> <img src={props.logoUrl} alt=""/></div>
      <nav>
          <a href={props.linkUrl1}>{props.link1}</a>
          <a href={props.linkUrl2}>{props.link2}</a>
          <a href={props.linkUrl3}>{props.link3}</a>
          </nav>
    </div>
  );
}
