import React from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile, tablet, lowpc } from "../responsive";
import { useParams } from "react-router";
import { useGlobalContext } from "../context";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${lowpc({ height: "40vh" })}
  ${tablet({ height: "30vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-size: 1.8rem;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${tablet({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  .selected {
    border: 3px solid teal;
  }
`;
const FilterTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 200;
`;
const FitlerColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${tablet({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const { id } = useParams();
  const { itemsClothing } = useGlobalContext();

  const item = itemsClothing[id - 1];
  console.log(item);
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={item.img} alt={item.name} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.name}</Title>
          <Desc>{item.desc}</Desc>
          <Price>{item.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FitlerColor className="selected" color="black" />
              <FitlerColor color="beige" />
              <FitlerColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
