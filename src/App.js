import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";

function App() {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = () => {
    fetch("hotels.json")
      .then((resp) => resp.json())
      .then((data) => setHotels(data.hotels))
      .catch((err) => console.log(err));
  };

  useEffect(fetchHotels, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels hotels={hotels} />} />
        <Route path="/hotels/:id" element={<HotelPage hotels={hotels} />} />
      </Routes>
      </>
  );
}

export default App;
