import imgCvMe from "./assets/cvImgMe.jpg";
function MyCv() {
  return (
    <>
      <h1>Mitt cv</h1>
      <div className="theCv">
        <div className="theLeftSide">
          <div className="imgAndContact">
            <img className="imgMe" src={imgCvMe} alt="" />
            <div className="contactMe">
              <h3 className="infoMe">
                <p className="cvCv">Cv</p>
                <p>Sebastian Bjelkstam</p>
                <p>Färgargårdstorget 52</p>
                <p>116 43 Stockholm</p>
              </h3>
            </div>
          </div>
          <div className="aboutMe">
            <h3>Vem är jag</h3>
            <p className="aboutMeText">
              Jag är en aktiv peron, ansvarsfull och punktlig. Jag jobbar gärna
              tillsammans med andra, men kan även jobba självständigt, tar
              intiativ och föröker alltid göra mitt bästa.
            </p>
            <h3 className="driveLicense">B Körkort</h3>

            <div className="phoneContact">
              <h3>Telefon:</h3>
              <p>0735160566</p>
            </div>

            <div className="mailContact">
              <h3>E-POST:</h3>
              <a>sebastian.bjelkstam@gmail.com</a>
            </div>

            <div className="myIntress">
              <h3>Intressen</h3>
              <p>Träning</p>
              <p>Fotboll</p>
              <p>Familj</p>
              <p>Natur</p>
            </div>
          </div>
        </div>

        {/* <div className="theRightSide"> */}
        <div className="theRight">
          <div className="study">
            <div className="utbildingBackground">
              <h3>Utbildning</h3>
            </div>

            <div className="theDiv">
              <h4>Medieinstitutet, Stockholm</h4>
              <p>2022 - 2024</p>
              <p>Webbutveckling e-handel</p>
            </div>
            <div className="theDiv">
              <h4>Halmstad Högskola</h4>
              <p>2021</p>
              <p>Tekniskt basår</p>
            </div>
            <div className="theDiv">
              <h4>Nacka Gymnasium</h4>
              <p>2018 - 2021</p>
              <p>Bygg & Anläggning</p>
            </div>
          </div>
          <div className="theBorderOnTheMiddle"></div>
          <div className="work">
            <div className="arbetsBackground">
              <h3>Arbetslivserfarenhet</h3>
            </div>
            <div>
              <div className="arbetsDiv">
                <h4>Operando</h4>
                <p>2023 - 2024</p>
                <p>Praktik webbutveckling via min utbildning</p>
              </div>
              <div className="arbetsDiv">
                <h5>Skanska Bygg</h5>
                <p>2018</p>
                <p>Extra arbete under lov</p>
              </div>
              <div className="arbetsDiv">
                <h5>Stockholm Stad</h5>
                <p>2016</p>
                <p>Sommarjobb via kommunen</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default MyCv;
