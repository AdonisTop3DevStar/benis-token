import { styled } from "styled-components";
import "./App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Meme from "../components/Meme";
import Footer from "../components/Footer";
import FunnyPics from "../components/FunnyPics";
import { ToggleProvider } from "../context/toggleContext";

function HomePage() {
  return (
    <ToggleProvider>
      <Navbar />
      <Main>
        <Hero />
        <About />
        <Meme />
        {/* <FunnyPics /> */}
      </Main>
      <Footer />
    </ToggleProvider>
  );
}

export default HomePage;

const Main = styled.main``;
