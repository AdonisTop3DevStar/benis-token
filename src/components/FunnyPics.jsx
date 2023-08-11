import { styled } from "styled-components";
import { funnyPics, logo } from "../assets";

const FunnyPics = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <p>Funny pics</p>
      </Header>

      <ImgContainer />
    </Container>
  );
};

export default FunnyPics;

const Container = styled.section`
  margin: 4em auto;
  width: 100%;
  padding: 2em 1em;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin: 95px auto;

  @media screen and (max-width: 990px) {
    font-size: 16px;
  }
`;

const Logo = styled.div`
  width: 118.99px;
  height: 89px;
  background: url(${logo}) no-repeat center/contain;

  @media screen and (max-width: 990px) {
    width: 61.251px;
    height: 45.813px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2em;
  min-height: 100vh;
  margin-left: auto;
  background: url(${funnyPics}) no-repeat;
  background-size: contain;
  background-position: top center;

  @media screen and (max-width: 768px) {
    max-height: 217.442px;
  }
`;
