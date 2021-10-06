import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  width: 100%;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${tablet({ height: "50vh" })}
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 2.6rem;
  text-align: center;
  text-shadow: 1px 1px 1px #666;
  ${mobile({ fontSize: "1.6rem" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  :hover {
    transform: scale(1.02);
  }
  a {
    color: #666;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>
          <Link to="/productlist">SHOP NOW</Link>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
