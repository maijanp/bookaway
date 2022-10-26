import styles from "./TopSection.module.css";
//Skapar och exporterar komponenten TopSection och tillderar klasser för styling
export default function TopSection(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {" "}
        <img src={props.logoUrl} alt="" />
      </div>
      <nav>
        <a href={props.linkUrl1}>{props.link1}</a>
        <a href={props.linkUrl2}>{props.link2}</a>
        <a href={props.linkUrl3}>{props.link3}</a>
      </nav>
    </div>
  );
}
