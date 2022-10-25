import HotelCard from "../components/HotelCard/HotelCard";
import FilterForm from "../components/FilterForm/FilterForm"


export default function SearchResult(props) {
  return (
    <>
        <h1 style={{textAlign:"center", marginBottom:"4rem", borderBottom:"solid black 1px"}}>BÄSTA TRÄFFARNA PÅ DIN SÖKNING</h1>
        <div className="hotelsContainer">
        <FilterForm formTitle="Filtrera din sökning"/>

      <div className="hotelsCol">
        {props.foundHotels.map((hotel, idx) => (
          <HotelCard key={`hotel${idx}`} hotel={hotel}></HotelCard>
        ))}
      </div>
      </div>

    </>
  );
}
