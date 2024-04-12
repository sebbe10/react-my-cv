import Navbar from "./Navbar";
import Home from "./Home";
import Projekt from "./Projekt/Projekt";
import MyCv from "./MyCv";
import Clock from "./Projekt/Clock";
import TicTacToe from "./TicTacToe";
import Aboutme from "./Aboutme";
import TodoList from "./Projekt/TodoList";
import todoimg from "./assets/todoImg.png";
import clockimg from "./assets/theclock.png";
import tictactoeImg from "./assets/tictactoe.png";

import { Link, Route, Routes } from "react-router-dom";

function Header() {
  const slider = [
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
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/tictactoe" element={<TicTacToe />}></Route>
      </Routes>
      {/* </div> */}
    </>
  );
}
export default Header;
