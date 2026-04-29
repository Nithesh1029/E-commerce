import Carousel from "react-multi-carousel";
import { bannerData } from "../constants/data";

import { styled, Box } from "@mui/material";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const wrapper = styled(Box)`
  width: 100%;
`;

const Image = styled("img")({
  width: "100%",
  height: 280,
});

const Banner = () => {
  return (
    <>
      <wrapper>
        <Carousel
          responsive={responsive}
           infinite={true}
          swipeable={false}
          draggable={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {bannerData.map((data) => (
            <Image src={data.url} />
          ))}
        </Carousel>
      </wrapper>
    </>
  );
};

export default Banner;
