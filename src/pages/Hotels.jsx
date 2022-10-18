import HotelCard from '../components/HotelCard/HotelCard';
import TopSection from '../components/TopSection/TopSection'

export default function Hotels(props) {
    return <>
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
    <div className='flex-container'>
    {props.hotels && props.hotels.map ( (hot, idx) => <HotelCard key={`hot${idx}`} hotel={hot} /> )}
    </div>
    </>
}