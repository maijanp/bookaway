import styles from "../button/button.module.css";
//Skapar och exporterar komponenten Btn och tillderar klasser för styling
export default function Btn(props) {
  return (
    <a className={styles.button} href={props.btnUrl}>
      {props.btnLabel}
    </a>
  );
}
