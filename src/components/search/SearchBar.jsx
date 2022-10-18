import { Dropdown } from "bootstrap";
import React from "react";
import styles from "../search/SearchBar.module.css"

export default function Searchbar(props) {

  return (
    <>
      <form action="">
        <label for="select1">{props.labelSelect1}</label>
        <select name="select1">
          {props.optionList1.map((objList1, idx) => (
            <option value={objList1}>{objList1}</option>
          ))}
        </select>
        <label for="select2">{props.labelSelect2}</label>
        <select name="select2">
          {props.optionList2.map((objList2, idx) => (
            <option value={objList2}>{objList2}</option>
          ))}
        </select>

        <label for="select3">{props.labelSelect3}</label>
        <select name="select3">
          {props.optionList3.map((objList3, idx) => (
            <option value={objList3.month}>{objList3.month}</option>
          ))}
        </select>
        <label for="select4">{props.labelSelect4}</label>
        <select name="select4">
          {props.optionList4.map((objList4) => (
            <option value={objList4}>{objList4}</option>
          ))}
        </select>
      </form>
    </>
  );
}
