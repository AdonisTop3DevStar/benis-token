import { styled } from "styled-components";
import { card2 } from "../assets";

const LINKS = [
  { name: "Business & Finance", path: "" },
  { name: "Travel", path: "" },
  { name: "Fitness", path: "" },
  { name: "Paranormal", path: "" },
  { name: "Advice", path: "" },
  { name: "LGBT", path: "" },
  { name: "Pony", path: "" },
  { name: "Current News", path: "" },
  { name: "Worksafe Requests", path: "" },
  { name: "Very Important Posts Misc. (NSFW)", path: "" },
  { name: "Random", path: "" },
  { name: "ROBOT9001", path: "" },
  { name: "Politically Incorrect", path: "" },
  { name: "International/Random", path: "" },
  { name: "Cams & Meetups", path: "" },
  { name: "Shit 4chan Says", path: "" },
  { name: "Adult (NSFW)", path: "" },
];

const LINKS2 = [
  { name: "Video Games", path: "" },
  { name: "Video Game Generals", path: "" },
  { name: "Video Games/Multiplayer", path: "" },
  { name: "Video Games/Mobile", path: "" },
  { name: "Pokémon", path: "" },
  { name: "Retro Games", path: "" },
  { name: "Video Games/RPG", path: "" },
  { name: "Video Games/Strategy", path: "" },
];

const About = () => {
  return (
    <Container>
      <Header>About BENIS</Header>
      <Card1>
        <p>
          In the cyber realms of 2023, where memes reign supreme, a peculiar
          phenomenon surfaced—a meme coin called &quot;BenisAintFree23Cents.&quot; This
          digital enigma fused the essence of Spurdo Sparde&apos;s hilarity, the
          resounding words of Donald Trump proclaiming &quot;Freedom ain&apos;t free,&quot; and
          the whimsical musings of Elon Musk with his 23 cents/day Twitter
          antics.
        </p>
        <p>
          Amidst the vast expanse of the internet, &quot;BenisAintFree23Cents&quot; etched
          its mark as a symbol of unconventional humor and a sense of
          camaraderie among its followers. Like an interstellar comet, it
          streaked through social media feeds, capturing the attention of
          internet enthusiasts who craved a playful and absurd investment.
        </p>

        <p>
          But behind the laughter lay a profound message—that even in the
          digital cosmos, freedom and levity dance hand in hand. The fusion of
          seemingly unrelated elements birthed a vibrant and interconnected
          community, celebrating the joy of shared humor and the boundless
          creativity of the internet.
        </p>
        <p>
          As &quot;BenisAintFree23Cents&quot; ventured forth, its celestial journey
          remained uncertain, riding the unpredictable tides of the meme
          economy. Yet, its cosmic essence endeared itself to those who embraced
          the spirit of fun and spontaneity in the ever-changing landscape of
          online culture.
        </p>
        <p>
          With each passing moment, the meme coin continued to carve its niche
          in the annals of internet lore, an emblem of the delightful and absurd
          interplay between human ingenuity and digital mirth. And so,
          &quot;BenisAintFree23Cents&quot; lived on, twinkling in the virtual heavens,
          inviting curious souls to join its cosmic quest for laughter and a
          fleeting escape from the ordinary.
        </p>
      </Card1>
      {/* <Card2>
        <Links1>
          {LINKS.map((link, index) => (
            <li key={`${link.name}-${index}`}>
              <a href="">{link.name}</a>
            </li>
          ))}
        </Links1>
        <Links1>
          {LINKS2.map((link, index) => (
            <li key={`${link.name}-${index}`}>
              <a href="">{link.name}</a>
            </li>
          ))}
        </Links1>
        <Links1 className="absolute bottom">
          {LINKS2.map((link, index) => (
            <li key={`${link.name}-${index}`}>
              <a href="">{link.name}</a>
            </li>
          ))}
        </Links1>
      </Card2> */}
    </Container>
  );
};

export default About;

const Container = styled.section`
  padding: 1em 0;

  @media screen and (max-width: 990px) {
    padding: 1em 0;
  }
`;

const Header = styled.header`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin: 1em 0;

  @media screen and (max-width: 990px) {
    font-size: 16px;
  }
`;

const Card1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  gap: 4em;
  position: relative;
  margin-bottom: 4em;

  & p {
    color: #000;
    font-family: Comic Sans MS;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* max-width: 896px; */

    @media screen and (max-width: 990px) {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
  }
`;

const Card2 = styled.div`
  width: 100%;
  border: 4px solid #9c5838;
  padding: 0 2em;
  margin: 4em 0;
  display: flex;
  /* align-items:center; */
  position: relative;
  background: url(${card2}), lightgray 50% / contain no-repeat;
  background-size: 100%;
  height: 779px;
  max-height: 779px;
  max-width: 1059px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1em;
    background-size: 100%;
    margin: 2em auto;
    max-height: 75%;
  }
`;

const Links1 = styled.ul`
  padding: 87px 0;
  padding-inline-start: 2em;
  margin: 0;
  color: #854426;
  width: MIN(349px, 50%);
  flex: 1;

  & li {
    font-size: clamp(8.503px, 2vw, 24px);
  }

  & li > a {
    color: inherit;
    font-family: Comic Sans MS;
    font-size: inherit;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }

  &.absolute {
    position: absolute;

    &.top {
      top: 0;
    }

    &.bottom {
      bottom: 5%;
      right: 0;
    }
  }

  @media screen and (max-width: 640px) {
    width: MIN(164.748px, 85%);
    padding: 1em 0;

    &.absolute {
      position: absolute;

      &.top {
        top: 0;
      }

      &.bottom {
        bottom: 5%;
        right: 0;
      }
    }
  }
`;
