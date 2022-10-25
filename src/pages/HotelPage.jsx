import { useParams } from "react-router-dom";
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
      <main>
<h1 style={{textAlign:"center", borderBottom:"1px solid black"}}>{thisHotel.name}</h1>
<ImageGallery hotel={thisHotel}></ImageGallery>
<Description hotel={thisHotel}></Description>
  </main>
  </>
  );}

}
