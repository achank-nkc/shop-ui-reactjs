import styled from "styled-components";
import ProductItem from "./ProductItem";
import { tablet, mobile, lowpc } from "../responsive";
import { useGlobalContext } from "../context";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  ${lowpc({ gridTemplateColumns: "repeat(3, 1fr)" })}
  ${tablet({ gridTemplateColumns: "repeat(2, 1fr)", padding: "0" })}
  ${mobile({ gridTemplateColumns: "repeat(1, 1fr)" })}
`;

const Products = () => {
  const { itemsClothing } = useGlobalContext();
  return (
    <Container>
      {itemsClothing.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
