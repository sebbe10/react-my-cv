import Navbar from "./Navbar";
import Home from "./Home";
import Projekt from "./Projekt/Projekt";
import Aboutme from "./Aboutme";
import TodoList from "./Projekt/TodoList";
import Footer from "./Footer";
import Clock from "./Projekt/Clock";
import TicTacToe from "./Projekt/TicTacToe";
import todoimg from "./assets/todoImg.png";
import clockimg from "./assets/theclock.png";
import tictactoeImg from "./assets/tictactoe.png";
import weatherImg from "./assets/weather.png";
import { Link, Route, Routes } from "react-router-dom";
import MyCv from "./MyCv";
import Header from "./Header";

function App() {
  const slider = [
    { url: todoimg, imgLink: "/todolist", name: "Todo List" },
    { url: clockimg, imgLink: "/clock", name: "Clock" },
    { url: tictactoeImg, imgLink: "/tictactoe", name: "Tic tac toe" },
    { url: weatherImg, imgLink: "/weather", name: "Weather app" },
  ];
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
