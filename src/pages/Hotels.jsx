import { Form } from "react-bootstrap";
import HotelCard from "../components/HotelCard/HotelCard";
import TopSection from "../components/TopSection/TopSection";
export default function Hotels(props) {
  return (
    <>
      <TopSection
        linkUrl1="http://localhost:3000/"
        link1="Hem"
        linkUrl2="http://localhost:3000/hotels"
        link2="Boende"
        linkUrl3=""
        link3="Paketresa"
        linkUrl4=""
        link4="Taxi"
        linkUrl5=""
        link5="Hjälp"
        logoUrl="./images/logo-1.png"
      ></TopSection>

      <Form>
        <Form.Group controlId="formFilterFood">
          <Form.Label>Måltider</Form.Label>
          <Form.Check type="checkbox" label="All inclusive"></Form.Check>
          <Form.Check type="checkbox" label="Frukost ingår"></Form.Check>
          <Form.Check type="checkbox" label="Halvpension"></Form.Check>
        </Form.Group>
        <Form.Group controlId="formFilterFacilities">
          <Form.Label>Bekvämligheter</Form.Label>
          <Form.Check type="checkbox" label="WiFi"></Form.Check>
          <Form.Check type="checkbox" label="Reception 24 h"></Form.Check>
          <Form.Check type="checkbox" label="Restaurang"></Form.Check>
          <Form.Check type="checkbox" label="Bar"></Form.Check>
          <Form.Check type="checkbox" label="Pool"></Form.Check>
        </Form.Group>
      </Form>

      <div className="flex-container">
        {props.hotels &&
          props.hotels.map((hot, idx) => (
            <HotelCard key={`hot${idx}`} hotel={hot} />
          ))}
      </div>
    </>
  );
}
