import aboutMeImg from "./assets/aboutmeimg.png";
import { Link, Route, Routes } from "react-router-dom";

function Aboutme() {
  return (
    <>
      <div className="borderAboutMe">
        <div className="imgAndAbout">
          <img className="aboutMeImg" src={aboutMeImg} alt="" />
          <h1>Om mig</h1>
        </div>
        <div className="textAboutMe">
          <p>
            Jag läser sista terminen på Medieinstitutet idag och studerar
            Webbutveckling E-handel, och ser nu fram emot att börja jobba.
            Sökder jobb inom frontend utveckling vilket jag tycker är jättekul
            och det är här jag ser min framtid. Därför skulle det verkligen vara
            roligt att få jobbet och lära mig ännu mer inom området. Som sagt så
            tycker jag html, css, scss, react och javascriopt. Jag har en stor
            datavana och skulle vilja beskriva mig själv som en utåtriktad,
            ansvarsfull och punktlig person, har jag ansvar över något så gör
            jag mitt yttersta för att få ett så bra resultat som möjligt. Mina
            ambitioner har alltid varit höga och jag är väldigt mån om att
            lyckas med det jag ger mig in på. Jag ser fram emot att höra ifrån
            er så kan jag berätta mer om mig själv. Bästa hälsningar Sebastian
            Bjelkstam Färgargårdstorget 52 116 43 Stockholm Mobil: 0735 160 566
            e-mail: sebastian.bjelkstam@gmail.com eller kontakta här:
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
