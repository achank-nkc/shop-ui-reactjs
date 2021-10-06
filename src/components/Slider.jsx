import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { sliderItems } from "../data";
import { lowpc, mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${lowpc({ width: "100vw", height: "50vh" })}
  ${tablet({ height: "50vh" })}
  ${mobile({ height: "40vh" })}
`;
const Arrow = styled.div`
  z-index: 2;
  width: 40px;
  height: 40px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  .left {
    margin-left: 8px;
  }
  .right {
    margin-left: 10px;
  }
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  :hover {
    transform: scale(1.08);
  }
  box-shadow: 1px 1px #dfd7d7;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  align-items: center;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  ${lowpc({ height: "100%" })}
`;
const Image = styled.img`
  height: 80%;
  ${mobile({ height: "50%" })}
`;
const ImgContainer = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  align-items: center;
  ${mobile({ flex: "1" })}
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 50px;
  ${tablet({ padding: "10px" })}
`;
const Title = styled.h1`
  text-transform: capitalize;
  font-size: 3.6rem;
  ${tablet({ fontSize: "2.4rem" })}
  ${mobile({ fontSize: "1.2rem" })}
`;
const Desc = styled.p`
  text-transform: capitalize;
  margin: 50px 0px;
  font-size: 1.6rem;
  letter-spacing: 3px;
  font-weight: 500px;
  ${tablet({ fontSize: "1.2rem" })}
  ${mobile({ fontSize: ".6rem" })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.6rem;
  background-color: transparent;
  cursor: pointer;
  :hover {
    transform: scale(0.99);
  }
  ${tablet({ padding: "10px", fontSize: "1rem" })}
  ${mobile({ padding: "5px", fontSize: ".6rem" })}
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon className="left" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to="/productlist">
                  <Button>SHOW NOW</Button>
                </Link>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon className="right" />
      </Arrow>
    </Container>
  );
};

export default Slider;
