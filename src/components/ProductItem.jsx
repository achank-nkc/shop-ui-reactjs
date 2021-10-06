import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 300;
  color: white;
  margin: 20px;
  text-shadow: 0.3px 0.7px #555;
`;
const Price = styled.h2`
  font-weight: 500;
  color: beige;
  font-size: 1.4rem;
  text-shadow: 1px 1px 1px #555;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductItem = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <Container>
        <Circle />
        <Image src={item.img} alt={item.name} />
        <Info>
          <Title>{item.name}</Title>
          <IconContainer>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </IconContainer>
          <Price>{item.price}</Price>
        </Info>
      </Container>
    </Link>
  );
};

export default ProductItem;
