import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import BookingPage from "./pages/BookingPage/BookingPage";
import "./fonts/Outfit-VariableFont_wght.ttf";
import SearchResult from "./pages/SearchResult";
import TopSection from "./components/TopSection/TopSection"

function App() {
  const [hotels, setHotels] = useState([]);
  const [foundHotels, setFoundHotels] = useState([]);
  const navigate = useNavigate();
  const handleHotelSearch = (departure, location) => {
    const foundHotels = hotels.filter(
      (hotel) =>
        hotel.departure.includes(departure) && hotel.location.includes(location)
    );
    setFoundHotels(foundHotels);
    if (foundHotels.length > 0) {
      navigate("/searchresult");
    } else {
      alert("Inga matchande sökresultat. Försök igen");
    }
  };

  const fetchHotels = () => {
    fetch("/hotelsdata.json")
      .then((resp) => resp.json())
      .then((data) => {
        setHotels(data.hotels);
        setFoundHotels(data.hotels);
        console.log("this is the data", data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchHotels, []);

  return (
    <>
    <TopSection  linkUrl1="/"
        link1="HEM"
        linkUrl2="/hotels"
        link2="BOENDE"
        linkUrl3=""
        link3="PAKETRESA"
        linkUrl4=""
        link4="TAXI"
        linkUrl5=""
        link5="HJÄLP"
        logoUrl="../../../images/logo-1.png"></TopSection>
      <Routes>
        <Route
          exact path="/"
          element={<Home handleHotelSearch={handleHotelSearch} />}
        />
        <Route exact path="/hotels" element={<Hotels hotels={hotels} />} />
        <Route path="/hotels/:id" element={<HotelPage hotels={hotels} />} />
        <Route path="/hotels/:id/booking" element={<BookingPage hotels={hotels}/>} />
        <Route
          path="/searchresult"
          element={<SearchResult foundHotels={foundHotels} />}
        />
      </Routes>
    </>
  );
}

export default App;
