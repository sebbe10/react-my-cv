import Navbar from "./Navbar";
import Home from "./Home";
import Projekt from "./Projekt/Projekt";
import MyCv from "./MyCv";
import Clock from "./Projekt/Clock";
import TicTacToe from "./Projekt/TicTacToe";
import Aboutme from "./Aboutme";
import TodoList from "./Projekt/TodoList";
import todoimg from "./assets/todoImg.png";
import clockimg from "./assets/theclock.png";
import tictactoeImg from "./assets/tictactoe.png";
import weatherImg from "./assets/weather.png";
import { Link, Route, Routes } from "react-router-dom";
import Weather from "./Projekt/Weather";
import EmailRestApi from "./Components/EmailRestApi";

function Header() {
  const slider = [
    { url: weatherImg, imgLink: "/weather", name: "Weather app" },
    { url: todoimg, imgLink: "/todolist", name: "Todo List" },
    { url: clockimg, imgLink: "/clock", name: "Clock" },
    { url: tictactoeImg, imgLink: "/tictactoe", name: "Tic tac toe" },
  ];

  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
      <Routes>
        <Route path="/" element={<Home slider={slider} />}></Route>
        <Route path="/projekt" element={<Projekt slider={slider} />}></Route>
        <Route path="/aboutme" element={<Aboutme />}></Route>
        <Route path="/mycv" element={<MyCv />}></Route>
        {/* <Route path="/contact" element={<EmailRestApi />}></Route> */}
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/tictactoe" element={<TicTacToe />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
      {/* </div> */}
    </>
  );
}
export default Header;
