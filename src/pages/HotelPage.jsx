import { useParams } from "react-router-dom";
import TopSection from "../components/TopSection/TopSection";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Description from "../components/Description/description";
export default function HotelPage(props) {
  const { id } = useParams();
  const thisHotel = props.hotels.find((hot) => hot.hotelId === Number(id));

  if (!thisHotel) {
    return(
        <div>Sidan hittades inte</div>
    )
} else { return (
    <>
      <TopSection
        linkUrl1="http://localhost:3000/"
        link1="HEM"
        linkUrl2="http://localhost:3000/hotels"
        link2="BOENDE"
        linkUrl3=""
        link3="PAKETRESA"
        linkUrl4=""
        link4="TAXI"
        linkUrl5=""
        link5="HJÄLP"
        logoUrl="../images/logo-1.png"
      ></TopSection>
      <main>
<h1 style={{textAlign:"center", borderBottom:"1px solid black"}}>{thisHotel.name}</h1>
<ImageGallery hotel={thisHotel}></ImageGallery>
<Description hotel={thisHotel}></Description>
  </main>
  </>
  );}

}
