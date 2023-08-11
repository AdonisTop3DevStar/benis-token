import { styled } from "styled-components";
import "./App.css";
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
