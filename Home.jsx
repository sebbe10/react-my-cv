import { Link } from "react-router-dom";
import imgMe from "./assets/cvImgMe.jpg";
import reactImg from "./assets/react.png";

import todllistImg from "./assets/todoImg.png";
import { useState, useEffect } from "react";
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
    const intervalId = setInterval(rightClick, 5000); // Change image every 3 seconds (3000 milliseconds)
    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, [currentIndex]);

  function showTextTodo() {
    let showAboutTodo = document.querySelector(".aboutTodo");

    if (showAboutTodo.innerHTML === "Hur Todo List fungerar...") {
      showAboutTodo.classList.add("backgroundAboutTodo");

      showAboutTodo.innerHTML =
        "Hur Todo List fungerar, man kan lägg till namn och datum och så kan du ta bort personen information från listan om du vill. Du kan också flyyta upp personen i listan eller nedåt om du vill.";
    } else {
      showAboutTodo.classList.remove("backgroundAboutTodo");

      showAboutTodo.innerHTML = "Hur Todo List fungerar...";
    }
  }

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
  }

  return (
    <>
      <div className="homeStyle">
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
      </div>
      <div className="myDiv">
        <div className="card">
          <img className="myReactImg" src={reactImg} alt="" />
          <div>
            <p>
              Projekten som man kan se på min webbsida är bygga med React JS
            </p>
          </div>
        </div>
        <div className="card" onClick={showTextTodo} onMouseOver={showTextTodo}>
          <img className="myTodoImg" src={todllistImg} alt="" />
          <div>
            <p className="aboutTodo">Hur Todo List fungerar...</p>
            {/* <button className="btn1" onMouseOver={showTextTodo}>
              Läs mer
            </button> */}
          </div>
        </div>
        <div className="card">
          <img src="" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              odit, consequatur repellendus quaerat exercitationem praesentium
              quasi earum quam ex fuga, fugit necessitatibus inventore,
              architecto esse distinctio sed error eum voluptate!
            </p>
          </div>
        </div>

        <div className="backNowledge" onMouseOver={seYour}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
