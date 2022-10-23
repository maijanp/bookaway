import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import BookingPage from "./pages/BookingPage/BookingPage";
import "./fonts/Outfit-VariableFont_wght.ttf";
import SearchResult from "./pages/SearchResult";

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
    } else {alert('Inga matchande sökresultat. Försök igen')}
  };
  const fetchHotels = () => {
    fetch("hotels.json")
      .then((resp) => resp.json())
      .then((data) => {
        setHotels(data.hotels);
        setFoundHotels(data.hotels);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchHotels, []);

  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home handleHotelSearch={handleHotelSearch} />}
        />
        <Route path="/hotels" element={<Hotels hotels={hotels} />} />
        {/* <Route path="/hotels/:id" element={<HotelPage hotels={hotels} />} /> */}
        <Route path="/hotels/:id/booking" element={<BookingPage />} />
        <Route
          path="/searchresult"
          element={<SearchResult foundHotels={foundHotels} />}
        />
      </Routes>
    </>
  );
}

export default App;
