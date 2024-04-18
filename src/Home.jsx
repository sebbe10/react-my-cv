import { Link } from "react-router-dom";
import imgMe from "./assets/cvImgMe.jpg";
import tictactoeImg from "./assets/tictactoe.png";

import todllistImg from "./assets/todoImg.png";
import { useState, useEffect } from "react";
import EmailForm from "./Components/EmailForm";
import EmailRestApi from "./Components/EmailRestApi";
function Home({ slider, index }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const slider = [
  //   { url: todoimg, imgLink: "/todolist", name: "Todo List" },
  //   { url: clockimg, imgLink: "/clock", name: "Clock" },
  //   { url: tictactoeImg, imgLink: "/tictactoe", name: "Tic tac toe" },
  // ];

  const styleSlider = {
    backgroundImage: `url(${slider[currentIndex].url})`,
  };

  const styleLeftClick = {
    fontSize: "30px",
    position: "absolute",
    left: "10px",
  };
  const styleRightClick = {
    fontSize: "30px",
    position: "absolute",
    right: "10px",
  };

  const leftClick = () => {
    const firstIndex = currentIndex === 0;
    const newIndex = firstIndex ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const rightClick = () => {
    const lastIndex = currentIndex === slider.length - 1;
    const newIndex = lastIndex ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };
  console.log(slider[currentIndex].imgLink);

  useEffect(() => {
    const intervalId = setInterval(rightClick, 2000); // Change image every 3 seconds (3000 milliseconds)
    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, [currentIndex]);

  function seYour() {
    let myHtml = document.querySelector(".myHtml2");
    myHtml.classList.add("activate");

    let myCss = document.querySelector(".myCss2");
    myCss.classList.add("activate");

    let myJavascript = document.querySelector(".myJavascript2");
    myJavascript.classList.add("activate");

    let myReact = document.querySelector(".myReact2");
    myReact.classList.add("activate");
    let myWordpress2 = document.querySelector(".myWordpress2");
    myWordpress2.classList.add("activate");

    let myPHP = document.querySelector(".myPHP2");
    myPHP.classList.add("activate");
    let myAPI = document.querySelector(".myAPI2");
    myAPI.classList.add("activate");
    let mySQL = document.querySelector(".mySQL2");
    mySQL.classList.add("activate");
  }

  return (
    <>
      <div
        className="homeStyle"
        onClick={seYour}
        onMouseOver={seYour}
        onTouchMove={seYour}
        onTouchEnd={seYour}
        onTouchStart={seYour}>
        <div className="searchAndProject">
          <div className="layoutSearch">
            <img className="homeImgMe" src={imgMe} alt="" />
            <div>
              <h3>Söker jobb som Frontend Utvecklare</h3>
            </div>

            <div className="divProjekt">
              <div className="divStyleImgSliderHome">
                <i
                  style={styleLeftClick}
                  onClick={leftClick}
                  className="fa-solid fa-arrow-left"></i>
                <i
                  style={styleRightClick}
                  onClick={rightClick}
                  className="fa-solid fa-arrow-right"></i>
                <Link to={slider[currentIndex].imgLink}>
                  <div className="singleSliderImg" style={styleSlider}></div>
                </Link>
                <div className="projectName">
                  <h3>{slider[currentIndex].name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="myDiv">
          <div
            className="backNowledge"
            onTouchCancel={seYour}
            onDragOver={seYour}
            onDrag={seYour}
            onDragEnter={seYour}
            onPointerDown={seYour}
            onTouchMove={seYour}
            onPointerUp={seYour}
            onMouseOver={seYour}>
            <h1>Mina kunskaper</h1>
            <div className="myNowledge">
              <div className="now">
                <h2>Html</h2>
                <div className="myHtml1">
                  <div className="myHtml2"></div>
                </div>
              </div>

              <div className="now">
                <h2>Css/Scss</h2>
                <div className="myCss1">
                  <div className="myCss2"></div>
                </div>
              </div>

              <div className="now">
                <h2>JavaScript</h2>
                <div className="myJavascript1">
                  <div className="myJavascript2"></div>
                </div>
              </div>

              <div className="now">
                <h2>Wordpress</h2>
                <div className="myWordpress1">
                  <div className="myWordpress2"></div>
                </div>
              </div>

              <div className="now">
                <h2>React</h2>
                <div className="myReact1">
                  <div className="myReact2"></div>
                </div>
              </div>

              <div className="now">
                <h2>PHP</h2>
                <div className="myPHP1">
                  <div className="myPHP2"></div>
                </div>
              </div>

              <div className="now">
                <h2>API</h2>
                <div className="myAPI1">
                  <div className="myAPI2"></div>
                </div>
              </div>

              <div className="now">
                <h2>MySQL</h2>
                <div className="mySQL1">
                  <div className="mySQL2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
