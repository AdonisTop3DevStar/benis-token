import styled from "styled-components";
import Logo from "./Logo";
import { hamburger } from "../assets";
import { useContext } from "react";
import { ToggleContext } from "../context/toggleContext";

const NavData = [
  { name: "How to Buy", path: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x03e78F2665E474A42EEeD875F6198590da10948b", color: "#000", bg: "#FCF4D1" },
  { name: "Contract", path: "https://etherscan.io/address/0x03e78F2665E474A42EEeD875F6198590da10948b", color: "#F3E29B", bg: "#243E9B" },
  { name: "LP Locked", path: "https://app.uncx.network/amm/uni-v2/pair/0x9e21b76412ae4f288331fc7311a0193547dbe66f", color: "#D31B1B", bg: "#600082" },
  { name: "Price Chart", path: "https://www.dextools.io/app/en/ether/pair-explorer/0x9e21b76412ae4f288331fc7311a0193547dbe66f", color: "#EF780A", bg: "#0BD25B" },
  { name: "Whitepaper", path: "#", color: "#0F8CFF", bg: "#8B1639" },
  { name: "Coingecko", path: "http://coingecko.com/", color: "#000", bg: "#FCF4D1" },
  { name: "Coinmarketcap", path: "http://coinmarketcap.com/", color: "#F8E00E", bg: "#18B3BD" },
  { name: "Twitter", path: "https://twitter.com/benis_token", color: "#000", bg: "#FCF4D1" },
  { name: "Telegram", path: "https://t.me/benis_token", color: "#000", bg: "#E64949" },
  { name: "Reddit", path: "https://reddit.com", color: "#000", bg: "#F00" },
  { name: "Merch", path: "#", color: "#000", bg: "#935335" },
  { name: "Merch", path: "#", color: "#000", bg: "#935335" },
];

const Navbar = () => {
  const { handleToggle } = useContext(ToggleContext);
  return (
    <Nav>
      <Logo />
      <Hamburger onClick={handleToggle} />
      <NavHeader>
        {NavData.map((link, index) => {
          return (
            <HeaderLinks
              key={`${link.name}-${index}`}
              style={{ color: link.color, background: link.bg }}
            >
              <a href={link.path}>{link.name}</a>
            </HeaderLinks>
          );
        })}
      </NavHeader>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 2em 5em;
  margin-bottom: 2em;
  @media screen and (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const NavHeader = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;
  max-width: 930px;
  min-width: 769px;

  @media screen and (max-width: 1280px) {
    min-width: MIN(100%, 587px);
    gap: 10px;
  }
`;

const HeaderLinks = styled.li`
  font-size: 24px;

  & a {
    padding: 10px;
    display: flex;
    place-items: center;

    cursor: pointer;
    font-family: Comic Sans MS;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: inherit;
    /* height: 100%; */
    width: 100%;
    max-height: 53px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 16px;

    & a {
      font-size: 16px;
      padding: 8px;
    }
  }
`;

const Hamburger = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  outline: 0;
  width: 24px;
  height: 24px;
  background: url(${hamburger}) no-repeat;
  transition: 0.8s ease;

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    outline: none;
    border: none;
    transform: scale(0.8);
  }

  @media screen and (min-width: 990px) {
    display: none;
  }
`;
