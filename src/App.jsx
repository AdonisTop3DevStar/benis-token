import { styled } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Meme from "./components/Meme";
import Footer from "./components/Footer";
import FunnyPics from "./components/FunnyPics";
import { ToggleProvider } from "./context/toggleContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { BrunnerPage } from "./pages/BrunnerPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/benis-runner" element={<BrunnerPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const Main = styled.main``;
