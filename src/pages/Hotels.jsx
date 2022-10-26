import FilterForm from "../components/FilterForm/FilterForm"
import HotelCard from "../components/HotelCard/HotelCard";
//Skapar och exporterar komponenten HotelPage
export default function Hotels(props) {
  return (
    <>
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
