import HotelCard from "../components/HotelCard/HotelCard";
import TopSection from "../components/TopSection/TopSection";
import FilterForm from "../components/FilterForm/FilterForm"


export default function SearchResult(props) {
  return (
    <>
      <TopSection linkUrl1="http://localhost:3000/"
        link1="HEM"
        linkUrl2="http://localhost:3000/hotels"
        link2="BOENDE"
        linkUrl3=""
        link3="PAKETRESA"
        linkUrl4=""
        link4="TAXI"
        linkUrl5=""
        link5="HJÄLP"
        logoUrl="./images/logo-1.png"></TopSection>
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
