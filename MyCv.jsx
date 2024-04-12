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
              <h2>Cv</h2>
              <h3 className="infoMe">
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
            <h4 className="driveLicense">B Körkort</h4>

            <div className="phoneContact">
              <h5>Telefon:</h5>
              <p>0735160566</p>
            </div>

            <div className="mailContact">
              <h5>E-POST:</h5>
              <a>sebastian.bjelkstam@gmail.com</a>
            </div>

            <div className="myIntress">
              <h5>Intressen</h5>
              <p>Träning</p>
              <p>Fotboll</p>
              <p>Familj</p>
              <p>Natur</p>
            </div>
          </div>
        </div>

        <div className="theRightSide">
          <div className="theRight">
            <div className="study">
              <h4>Utbildning</h4>
              <br />
              <div>
                <h5>Medieinstitutet, Stockholm</h5>
                <p>2022 - 2024</p>
                <p>Webbutveckling e-handel</p>
              </div>
              <div>
                <h5>Halmstad Högskola</h5>
                <p>2021</p>
                <p>Tekniskt basår</p>
              </div>
              <div>
                <h5>Nacka Gymnasium</h5>
                <p>2018 - 2021</p>
                <p>Bygg & Anläggning</p>
              </div>
            </div>

            <div className="work">
              <h3>Arbetslivserfarenhet</h3>
              <div>
                <div>
                  <h4>Operando</h4>
                  <p>2023 - 2024</p>
                  <p>Praktik webbutveckling via min utbildning</p>
                </div>
                <div>
                  <h5>Skanska Bygg</h5>
                  <p>2018</p>
                  <p>Extra arbete under lov</p>
                </div>
                <div>
                  <h5>Stockholm Stad</h5>
                  <p>2016</p>
                  <p>Sommarjobb via kommunen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCv;
