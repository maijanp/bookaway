import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Importerar komponenter
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import BookingPage from "./pages/BookingPage/BookingPage";
import SearchResult from "./pages/SearchResult";
import TopSection from "./components/TopSection/TopSection"
//Importerar typsnitt
import "./fonts/Outfit-VariableFont_wght.ttf";

function App() {
  //Skapar state-variabler
  const [hotels, setHotels] = useState([]);
  const [foundHotels, setFoundHotels] = useState([]);
  const navigate = useNavigate();

  //uppdatera appens statevariabel 'foundHotels'
  const handleHotelSearch = (departure, location) => {
    //Hotels filteras efter två villkor som båda måste stämma för att lagras i den resulterade arrayen 
    const foundHotels = hotels.filter(
      (hotel) =>
        hotel.departure.includes(departure) && hotel.location.includes(location)
    );
    setFoundHotels(foundHotels);
    //om sökningen ger matchning --> skicka till searchresult
    //Annars --> meddela
    if (foundHotels.length > 0) {
      navigate("/searchresult");
    } else {
      alert("Inga matchande sökresultat. Försök igen");
    }
  };

  //Hämtar hotell och lagrar i state-variabeln 'hotels'
  const fetchHotels = () => {
    fetch("/hotelsdata.json")
      .then((resp) => resp.json())
      .then((data) => {
        setHotels(data.hotels);
        setFoundHotels(data.hotels);
      })
      .catch((err) => console.log(err));
  };

  //Rendera om 
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

      {/* Routes används för att bestämma vart komponenter ska renderas
      */}
      <Routes>
        {/*funktionen handleHotelSearch skickas med som prop till Home för att utföra sökning enligt angivna instruktioner i funktionen*/}
        <Route
          exact path="/"
          element={<Home handleHotelSearch={handleHotelSearch} />}
        />

        {/*statevariabeln hotels skickas med som prop*/}
        <Route exact path="/hotels" element={<Hotels hotels={hotels} />} />
        <Route path="/hotels/:id" element={<HotelPage hotels={hotels} />} />
        <Route path="/hotels/:id/booking" element={<BookingPage hotels={hotels}/>} />

        {/*statevariabeln foundHotels skickas med som prop till SearchResult*/}
        <Route
          path="/searchresult"
          element={<SearchResult foundHotels={foundHotels} />}
        />
      </Routes>
    </>
  );
}

export default App;
