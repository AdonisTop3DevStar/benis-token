import { styled } from "styled-components";
import { useContext } from "react";
import { ToggleContext } from "../context/toggleContext";
import { NavLink } from "react-router-dom";

const LINKS = [
  { name: "Feeless Locker", path: "" },
  { name: "Mev Free DEX", path: "/" },
  { name: "Launchpad", path: "/" },
  { name: "Whale Group", path: "/" },
  { name: "Influencers", path: "/" },
  { name: "Doxxed Devs Group", path: "/" },
  { name: "VCs", path: "/" },
  { name: "DAO", path: "/" },
  { name: "Meme Generator", path: "/" },
  { name: "NFT", path: "/" },
  { name: "Marketplace", path: "/" },
  { name: "Layer2", path: "/" },
  { name: "ENS", path: "/" },
  { name: "Event Driven", path: "/" },
  { name: "Risk Manager", path: "/" },
  // { name: "Benis Runner", path: "/benis-runner" },
];

const PrimaryNav = () => {
  const { toggle } = useContext(ToggleContext);

  return (
    <Container className={`${toggle ? "show" : ""}`}>
      <Header>Interest</Header>
      <Links>
        {LINKS.map((link, index) => (
          <Link key={`${index}`}>
            <NavLink to={link.path} >{link.name}</NavLink>
          </Link>
        ))}
          <Link>
            <NavLink to="/benis-runner" style={{position:"absolute", right:"0", bottom:"-30%"}}>Benis Runner <img src="/new.gif" width="20" style={{marginLeft:"5px"}}/></NavLink>
          </Link>
      </Links>
    </Container>
  );
};

export default PrimaryNav;

const Container = styled.div`
  border: 4px solid #9c5838;
  background: #fcf4d1;
  width: 280px;
  max-height: 779px;
  padding: 1em;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 990px) {
    position: absolute;
    right: -100%;
    top: 74px;
    z-index: 99;
    max-height: 562px;
    display: none;
    transition: right 0.8s ease, display 1.6s ease 0.8s;

    &.show {
      display: flex;
      right: 0;
    }
  }
`;

const Header = styled.p`
  color: #854426;
  font-family: Comic Sans MS;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Links = styled.ul`
  width: MIN(100%, 249px);
  padding: 0;
  padding-inline-start: 2em;
  margin: 0;
  list-style: disc;
`;

const Link = styled.li`
  display: list-item;
  color: #854426;

  & a {
    font-family: Comic Sans MS;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    color: #854426;
    text-align: left;
  }

  @media screen and (max-width: 990px) {
    font-size: 16px;
    & a {
      font-size: 16px;
    }
  }
`;
