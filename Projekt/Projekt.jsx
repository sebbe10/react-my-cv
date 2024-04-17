import { useState } from "react";

import ticImg from "./tictactoe.png";
import todoImg from "./todoImg.png";
import weatherImg from "./weather.png";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Projekt({ slider, index }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  function showTextTicTacToe() {
    let activateCard = document.querySelector(".card1");

    let showAboutTicTacToe = document.querySelector(".aboutTicTacToe");

    if (showAboutTicTacToe.innerHTML === "Hur Tic Tac Toe fungerar...") {
      activateCard.classList.add("activate1");

      showAboutTicTacToe.classList.add("backgroundAboutTicTacToe");

      showAboutTicTacToe.innerHTML =
        "Hur Tic Tac Toe fungerar, den som får tre i rad vinner.";
    } else {
      activateCard.classList.remove("activate1");

      showAboutTicTacToe.classList.remove("backgroundAboutTicTacToe");

      showAboutTicTacToe.innerHTML = "Hur Tic Tac Toe fungerar...";
    }
  }

  function showTextTodo() {
    let activateCard = document.querySelector(".card2");

    let showAboutTodo = document.querySelector(".aboutTodo");

    if (showAboutTodo.innerHTML === "Hur Todo List fungerar...") {
      activateCard.classList.add("activate2");
      showAboutTodo.classList.add("backgroundAboutTodo");

      showAboutTodo.innerHTML =
        "Hur Todo List fungerar, man kan lägg till namn och datum och så kan du ta bort personen information från listan om du vill. Du kan också flyyta upp personen i listan eller nedåt om du vill.";
    } else {
      activateCard.classList.remove("activate2");

      showAboutTodo.classList.remove("backgroundAboutTodo");

      showAboutTodo.innerHTML = "Hur Todo List fungerar...";
    }
  }

  function showTextWeather() {
    let activateCard = document.querySelector(".card3");

    let showAboutWeather = document.querySelector(".aboutWeather");

    if (showAboutWeather.innerHTML === "Här kan du söka upp...") {
      activateCard.classList.add("activate3");
      showAboutWeather.classList.add("backgroundAboutWeather");

      showAboutWeather.innerHTML =
        "Här kan du söka upp vilket väder det är i just denna stad du söker efter.";
    } else {
      activateCard.classList.remove("activate3");

      showAboutWeather.classList.remove("backgroundAboutWeather");

      showAboutWeather.innerHTML = "Här kan du söka upp...";
    }
  }

  return (
    <>
      <h1>Projekt</h1>

      <div className="divProjekt">
        <div className="divStyleImgSlider">
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
      <div className="cards">
        <div className="card1">
          <img className="myTicImg" src={ticImg} alt="" />
          <div className="borderAroundBtnAndText">
            <div>
              <p className="aboutTicTacToe">Hur Tic Tac Toe fungerar...</p>
            </div>
            <button className="btn1" onClick={showTextTicTacToe}>
              Läs mer
            </button>
          </div>
        </div>
        <div className="card2">
          <img className="myTodoImg" src={todoImg} alt="" />
          <div className="borderAroundBtnAndText">
            <div>
              <p className="aboutTodo">Hur Todo List fungerar...</p>
            </div>
            <button className="btn1" onClick={showTextTodo}>
              Läs mer
            </button>
          </div>
        </div>
        <div className="card3">
          <img className="myWeatherImg" src={weatherImg} alt="" />
          <div className="borderAroundBtnAndText">
            <div>
              <p className="aboutWeather">Här kan du söka upp...</p>
            </div>

            <button className="btn1" onClick={showTextWeather}>
              Läs mer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Projekt;
