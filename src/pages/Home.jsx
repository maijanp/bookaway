import CardGroup from "../components/CardGroup/CardGroup";
import Searchbar from "../components/search/SearchBar";
import LeftAlignedCard from "../components/LeftCard/LeftAlignedCard";

//Skapar arrayer för select-element och  tillhörande options
const placesOfDeparture = ["Stockholm", "Göteborg", "Malmö", "Köpenhamn"];
const destinations = [
  "Grekland",
  "Portugal",
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
  { month: "September", weeks: false },
];

const lengthsOfStay = ["Weekend", "1 vecka", "2 veckor", "3 veckor"];

//Skapar och exporterar komponenten Home
export default function Home(props) {
  return (
    <>
      <Searchbar
        optionList1={placesOfDeparture}
        optionList2={destinations}
        optionList3={dates}
        optionList4={lengthsOfStay}
        labelSelect1="Avreseort"
        labelSelect2="Resmål"
        labelSelect3="Datum"
        labelSelect4="Reslängd"
        handleSearch={props.handleHotelSearch}
      ></Searchbar>
      <h1 style={{ textAlign: "center" }}>Vilken typ av resa söker du?</h1>
      <CardGroup
        card1Img="../images/sunny_holiday.jpg"
        card1Title="Sol & Bad"
        card1Url="./Hotels"
        card1LinkText="Res från 1995:-/person"
        card2Img="../images/city.jpg"
        card2Title="City"
        card2Url="./Hotels"
        card2LinkText="Res från 795:-/person"
        card3Img="../images/culture.jpg"
        card3Title="Kultur"
        card3Url="./Hotels"
        card3LinkText="Res från 795:-/person"
      ></CardGroup>
      <LeftAlignedCard
        imgUrl="../images/family_ocean.jpg"
        cardTitle="Sommarresor"
        cardParagraph1="Här hittar du alla våra resemål till sommarlovet.
      Ta med hela familjen, njut på stranden och åk på äventyr!
      "
        cardParagraph2="Bokar du ett All Inclusive hotell ingår även all mat och dryck."
        cardLinkUrl="./hotels"
        cardLinkText="Res från 1995:-/person"
      ></LeftAlignedCard>
    </>
  );
}
