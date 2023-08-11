import { styled } from "styled-components";
import { logo } from "../assets";

const Logo = () => {
  return (
    <LogoContainer className="logo" href="/">
      <LogoImg src={logo} alt="logo" />
      <LogoText>Benis</LogoText>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  /* min-width: 202.5px; */

  &.white {
    filter: invert(1) saturate(0.1);
  }

  @media screen and (max-width: 990px) {
    gap: 10px;
  }
`;
const LogoImg = styled.img`
  width: 100%;
  width: 118.99px;
  height: 89px;

  @media screen and (max-width: 990px) {
    width: 44.621px;
    height: 33.375px;
  }
`;

const LogoText = styled.p`
  color: #854426;
  font-family: Comic Sans MS;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (max-width: 990px) {
    font-size: 16px;
  }
`;
