
import Searchbar from "../components/search/SearchBar";
import TopSection from "../components/TopSection/TopSection";

const placesOfDeparture = ["Stockholm", "Göteborg", "Malmö", "Köpenhamn"];
const destinations = [
  "Aruba",
  "Cypern",
  "Grekland",
  "Marocko",
  "Portugal",
  "Sydafrika",
  "Spanien",
  "Thailand",
];
const dates = [
  {
    month: "Juni",
    weeks: ["vecka 22", "vecka 23", "vecka 24", "vecka 25", "vecka 26"],
  },
  {
    month: "Juli",
    weeks: ["vecka 27", "vecka 28", "vecka 29", "vecka 30"],
  },
  {
    month: "Augusti",
    weeks: ["vecka 31", "vecka 32", "vecka 33", "vecka 34", "vecka 35"],
  },
  { month: "September", weeks: null },
];

const lengthsOfStay = ["Weekend", "1 vecka", "2 veckor", "3 veckor"];

export default function Home() {
  return (
    <>
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
      <Searchbar
        optionList1={placesOfDeparture}
        optionList2={destinations}
        optionList3={dates}
        optionList4={lengthsOfStay}
        labelSelect1="Avreseort"
        labelSelect2="Resemål"
        labelSelect3="Datum"
        labelSelect4="Antal resenärer"
      ></Searchbar>
   </>
  );
}
