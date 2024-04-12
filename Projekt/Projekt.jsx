import { useState } from "react";
// import todoimg from "../assets/image.png";
// import clockimg from "../assets/theclock.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Home from "../Home";

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
