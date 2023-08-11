import { styled } from "styled-components";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { real_images as images } from "../assets";


const Meme = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <Container>
      <Header>Meme</Header>
      <div>
        <Gallery images={images} onClick={handleClick}
          enableImageSelection={false} />
        {/* {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )} */}
      </div>
    </Container>
  );
};

export default Meme;

const Container = styled.section``;

const Header = styled.header`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  @media screen and (max-width: 990px) {
    font-size: 24px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2em;
  height: 100vh;
  max-height: 1100px;
  max-width: 1280px;
  margin-left: auto;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 768px) {
    max-height: 70vw;
  }
`;