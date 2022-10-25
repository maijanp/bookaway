import TopSection from "../../components/TopSection/TopSection";
import "./BookingPage.css";

const data = {
  hotel: {
    name: "Holiday Inn Mallorca, Mallorca Palma Nova",
    dateFrom: new Date("2023-06-12"),
    dateTo: new Date("2023-06-19"),
    totalPrice: 15975,
    adults: 3,
    children: 2,
    rooms: 2
  },
  additional: {
    connectedRooms: false,
    transfer: false
  },
  paymentAlternatives: [
    { name: "swish", imageUrl: "/images/swish.png" },
    { name: "card", imageUrl: "/images/visa.png" },
    { name: "invoice", imageUrl: "/images/klarna.png" }
  ]
};

function handleSubmit(e) {
  e.preventDefault();
  console.log("Formulär skickat! :)");
}

export default function Booking() {
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
        logoUrl="../../../images/logo-1.png"
      ></TopSection>
      <div className="top-container">
        <a className="a" href="http://localhost:3000/hotels">Holiday Inn Mallorca</a>
        <h1 className="h1">Boka din resa</h1>
      </div>
      <div className="flex-container">
        <div className="booking-information">
          <div className="info-left">
            <div>Totalpris: {data.hotel.totalPrice}:-</div>
          </div>
          <div className="info-right">
            <div>{data.hotel.name}</div>
            <div>
              {data.hotel.dateFrom.toDateString()}-
              {data.hotel.dateTo.toDateString()}
            </div>
            <div>
              {data.hotel.adults} vuxna, {data.hotel.children} barn
            </div>
            <div>{data.hotel.rooms} rum</div>
          </div>
        </div>
        <div className="flex-container">
          <form onSubmit={handleSubmit}>
            <div className="travelers-info">
              <h2 className="h2">Vem ska resa?</h2>
              {[...Array(data.hotel.adults)].map((x, i) => (
                <div key={`adults-${i}`}>
                  <h3>Vuxen {i + 1}</h3>
                  <div className="form-field">
                    <label>Förnamn</label>
                    <input type="text" name="firstName" />
                  </div>
                  <div className="form-field">
                    <label>Efternamn</label>
                    <input type="text" name="lastName" />
                  </div>
                  <div className="form-field">
                    <label>Födelsedatum</label>
                    <input type="date" name="dateOfBirth" />
                  </div>
                </div>
              ))}
              {[...Array(data.hotel.children)].map((x, i) => (
                <div key={`children-${i}`}>
                  <h3>Barn {i + 1}</h3>
                  <div className="form-field">
                    <label>Förnamn</label>
                    <input type="text" name="firstName" />
                  </div>
                  <div className="form-field">
                    <label>Efternamn</label>
                    <input type="text" name="lastName" />
                  </div>
                  <div className="form-field">
                    <label>Födelsedatum</label>
                    <input type="date" name="dateOfBirth" />
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-info">
              <h2>Kontaktuppgifter</h2>
              <div className="form-field">
                <label>Huvudresenär</label>
                <input type="text" name="contactName" />
              </div>
              <div className="form-field">
                <label>E-post</label>
                <input type="text" name="contactEmail" />
              </div>
              <div className="form-field">
                <label>Telefonnummer</label>
                <input type="text" name="contactPhone" />
              </div><br></br>
              <div className="form-field">
                <label>Adress</label>
                <input type="text" name="contactAddress" />
              </div>
              <div className="form-field">
                <label>Postnummer</label>
                <input type="text" name="contactZip" />
              </div>
              <div className="form-field">
                <label>Ort</label>
                <input type="text" name="contactCity" />
              </div>
            </div>
            <div className="additional-info">
              <h2  className="h2">Tillval</h2>
              <div className="form-field">
                <label>Anslutande rum</label>
                <input type="radio" name="connectedRooms" value="Yes" />
                Ja
                <input
                  type="radio"
                  name="connectedRooms"
                  value="No"
                  checked={true}
                />
                Nej
              </div>
              <div className="form-field">
                <label>Transfer</label>
                <input type="radio" name="transfer" value="Yes" />
                Ja
                <input type="radio" name="transfer" value="No" checked={true} />
                Nej
              </div>
            </div>
              <h2 className="h2">Betalalternativ</h2>
              <div className="payment-types">
              {data.paymentAlternatives.map((paymentAlternative, idx) => (
                <div key={`${idx}`}>
                  {paymentAlternative.name}{" "}
                  <img className="payment-img" src={paymentAlternative.imageUrl} />
                </div>
              ))}
            </div>
            <button className="booking-btn" type="submit">Bekräfta bokning</button>
          </form>
        </div>
      </div>
    </>
  );
}
