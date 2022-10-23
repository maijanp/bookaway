import React from "react";
import styles from "../search/SearchBar.module.css";

export default function Searchbar(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const departureSelector = e.target[0];
    const departure = departureSelector.value;
    const locationSelector = e.target[1];
    const location = locationSelector.value;
    props.handleSearch(departure, location)
  };

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.selectWrapper}>
          <label htmlFor="select1">{props.labelSelect1}</label>
          <select name="select1">
            {props.optionList1.map((objList1, idx) => (
              <option key={`select1${idx}`} value={objList1}>{objList1}</option>
            ))}
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="select2">{props.labelSelect2}</label>
          <select name="select2">
            {props.optionList2.map((objList2, idx) => (
              <option key={`select2${idx}`} value={objList2}>{objList2}</option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="select3">{props.labelSelect3}</label>
          <select name="select3">
            {props.optionList3.map((objList3, idx) => (
              <option key={`select3${idx}`} value={objList3.month}>{objList3.month}</option>
            ))}
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="select4">{props.labelSelect4}</label>
          <select name="select4">
            {props.optionList4.map((objList4, idx) => (
              <option key={`select4${idx}`} value={objList4}>{objList4}</option>
            ))}
          </select>
        </div>

        <div className={styles.wrapper}>
          <button type="submit">Sök</button>
        </div>
      </form>
    </>
  );
}
