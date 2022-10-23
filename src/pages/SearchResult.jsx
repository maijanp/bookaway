import HotelCard from "../components/HotelCard/HotelCard";
import TopSection from "../components/TopSection/TopSection";

export default function SearchResult(props) {
  return (
    <>
      <TopSection></TopSection>
      {props.foundHotels.map((hotel, idx) => (
        <HotelCard key={`hotel${idx}`} hotel={hotel}></HotelCard>
      ))}
    </>
  );
}
