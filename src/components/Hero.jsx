import { styled } from "styled-components";
import PrimaryNav from "./PrimaryNav";
import { heroImage } from "../assets";

const Hero = () => {
  return (
    <MainContainer>
      <PrimaryNav />
      <Container>
        <Header>
          BENIS YOUR NEXT <span>MEME TOKEN</span> WITH GREAT POTENTIAL{" "}
        </Header>
        <Images></Images>
      </Container>
    </MainContainer>
  );
};

export default Hero;

const MainContainer = styled.section`
  display: flex;
  gap: 2em;
  /* overflow-x: hidden; */
  /* position: relative; */
`;

const Container = styled.section`
  flex: 1;
`;

const Header = styled.header`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0.5em 0;

  & span {
    background: linear-gradient(180deg, #d31b1b 0%, #0036a0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Comic Sans MS;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media screen and (max-width: 990px) {
    font-size: 24px;
    text-align: left;

    & span {
      font-size: 24px;
      text-align: left;
    }
  }
`;

const Link = styled.a`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

const Images = styled.div`
  position: relative;
  background: grey;
  height: 100vh;
  max-height: 787px;
  background: url(${heroImage}) no-repeat;
  background-size: contain;
  background-position: top center;
  flex: 1;

  @media screen and (max-width: 1280px) {
    max-height: 70vw;
  }
`;
