import FilterForm from "../components/FilterForm/FilterForm"
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
      <h1 style={{textAlign:"center"}}>Hitta det perfekta hotellet för din resa </h1>
     <div className="hotelsContainer">
       <FilterForm formTitle="Filtrera"/>
        <div className="hotelsCol">
          {props.hotels &&
            props.hotels.map((hot, idx) => (
              <HotelCard key={`hot${idx}`} hotel={hot} />
            ))}
        </div>
     </div>
    </>
  );
}
