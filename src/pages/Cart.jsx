import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid black")};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "#f9fcfb"};
    transform: ${(props) =>
      props.type === "filled" ? "translateX(2px)" : "translateX(-2px)"};
  }
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  .remove {
    color: red;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductPriceItem = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 1.8rem;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 30px 0;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 20px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.8rem"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  &:hover {
    transform: translateY(-1px);
  }
`;

const Cart = () => {
  const { cart, clearCart, removeItem, toggleAmount, total, checkout } =
    useGlobalContext();
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/productlist">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <Link to="/cart">
              <TopText>Shopping Bag(2)</TopText>
            </Link>
            <TopText style={{ color: "red" }} onClick={clearCart}>
              Remove All Item
            </TopText>
          </TopTexts>
          <TopButton type="filled" onClick={checkout}>
            CHECKOUT NOW
          </TopButton>
        </Top>

        <Bottom>
          <Info>
            {cart.map((item) => (
              <div key={item.id}>
                <Product>
                  <ProductDetails>
                    <Image src={item.img} alt={item.name} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.name}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b>
                        {item.id}
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size:</b> {item.size}
                      </ProductSize>
                      <ProductPriceItem>
                        <b>Price:</b> ${item.price}
                      </ProductPriceItem>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleAmount(item.id, "inc")}
                      />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleAmount(item.id, "dec")}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>
                      ${parseFloat((item.price * item.quantity).toFixed(2))}
                    </ProductPrice>
                    <TopText
                      style={{ color: "red" }}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </TopText>
                  </PriceDetails>
                </Product>
                <Hr />
              </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$1.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$0.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{total + 1}</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton onClick={checkout}>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
