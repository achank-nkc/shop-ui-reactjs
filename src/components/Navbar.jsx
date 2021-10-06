import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
  border-radius: 5px;
  justify-content: space-between;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 220px;
  ${mobile({ width: "60px" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "1.4rem" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "flex-start" })}
`;
const MenuItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  margin-left: 25px;
  ${mobile({ fontSize: ".6rem", marginLeft: "10px" })}
`;

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ color: "GrayText", fontSize: "1rem" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>NKC.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">SIGN IN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={amount} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
