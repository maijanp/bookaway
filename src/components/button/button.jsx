import styles from "../button/button.module.css"
export default function Btn(props) {
    return (
        <a className={styles.button} href={props.btnUrl}>{props.btnLabel}</a>
    )
}

