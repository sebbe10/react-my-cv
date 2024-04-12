import { Link } from "react-router-dom";
import imgMe from "./assets/cvImgMe.jpg";
import tictactoe from "./assets/tictactoe.png";
import tictactoeImg from "./assets/tictactoe.png";
import { useState } from "react";
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
    </>
  );
}

export default Home;
