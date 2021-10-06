import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { tablet } from "../responsive";

const Container = styled.div`
  ${tablet({ width: "100%" })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  ${tablet({ width: "100%" })}
`;
const Title = styled.h1`
  margin: 20px auto;
  padding-left: 10px;
`;
const Filter = styled.div`
  margin: 10px;
  display: flex;
  ${tablet({ margin: "0px 10px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.div`
  font-size: 1.6rem;
  margin-right: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  font-size: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  ${tablet({ marginTop: "10px" })}
`;
const Option = styled.option`
  cursor: pointer;
`;

const ProductList = () => {
  return (
    <Container>
      <Title>All Products</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
