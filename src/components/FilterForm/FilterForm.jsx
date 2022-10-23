import { Form } from "react-bootstrap";
import styles from './FilterForm.module.css'
export default function FilterForm(props) {
  return (
    <div className="filterContainer">
        <span>{props.formTitle}</span>
      <Form className={styles.form}>
      <Form.Group style={{marginBottom:"5%"}} controlId="formFilterFood">
        <Form.Label style={{fontWeight:"bold"}}>Måltider</Form.Label>
        <Form.Check type="checkbox" label="All inclusive"></Form.Check>
        <Form.Check type="checkbox" label="Frukost ingår"></Form.Check>
        <Form.Check type="checkbox" label="Halvpension"></Form.Check>
      </Form.Group>
      <Form.Group controlId="formFilterFacilities">
        <Form.Label style={{fontWeight:"bold"}}>Bekvämligheter</Form.Label>
        <Form.Check type="checkbox" label="WiFi"></Form.Check>
        <Form.Check type="checkbox" label="Reception 24 h"></Form.Check>
        <Form.Check type="checkbox" label="Restaurang"></Form.Check>
        <Form.Check type="checkbox" label="Bar"></Form.Check>
        <Form.Check type="checkbox" label="Pool"></Form.Check>
      </Form.Group>
    </Form>
    </div>
  );
}
