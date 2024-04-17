import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeigt] = useState(window.innerHeight);
  // window.innerWidth;

  function openMenu() {
    document.querySelector(".nav").classList.toggle("open");
    document.querySelector(".removeMenu").classList.toggle("openBackMenu");
  }

  function removeButton() {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".removeMenu").classList.remove("openBackMenu");
  }
  function removeMenu() {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".removeMenu").classList.remove("openBackMenu");
  }

  function activatePx() {
    setHeigt(window.innerHeight);
    setWidth(window.innerWidth);
  }

  addEventListener("resize", activatePx);

  return (
    <>
      <nav className="nav-computer">
        {/* <div className="theBackForTitleName"> */}
        <h3>
          <Link to="/" className="site-title">
            Min portfolio
          </Link>
        </h3>

        {/*  */}

        {/* </div> */}
        {/* for computer and smartpad */}

        <ul>
          <CustomLink to="/">Hem</CustomLink>
          <CustomLink to="/projekt">Projekt</CustomLink>
          <CustomLink to="/mycv">Mitt cv</CustomLink>
          <CustomLink to="/aboutme">About me</CustomLink>
          <CustomLink to="/contact">Kontakt</CustomLink>

          <div className="gitLinkComputer">
            <a href="https://github.com/sebbe10">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </ul>
      </nav>
      {`${width} px`}
      {`${height} px`}

      {/* For phone */}
      <nav className="thePhoneNav">
        <h3>
          <Link to="/" className="site-title">
            Min portfolio
          </Link>

          {`${width} px`}
          {`${height} px`}
        </h3>

        <i className="fa-solid fa-bars" onClick={openMenu}></i>

        <div className="removeMenu" onClick={removeMenu}></div>

        <nav className="nav">
          <div className="divRemove">
            <i className="fa-solid fa-x" onClick={removeButton}></i>
          </div>
          <ul>
            <CustomLink to="/projekt">Projekt</CustomLink>
            <CustomLink to="/mycv">Mitt cv</CustomLink>
            <CustomLink to="/aboutme">About me</CustomLink>
            <CustomLink to="/contact">Kontakt</CustomLink>
          </ul>

          <div className="gitLink">
            <a href="https://github.com/sebbe10">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </nav>
      </nav>
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

export default Navbar;
