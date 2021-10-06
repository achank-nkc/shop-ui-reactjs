import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  .icon {
    margin-left: 8px;
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NKC.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui hic
          maxime rem minima quae corrupti fugit et perferendis, voluptate est
          harum ipsam assumenda provident, eaque eos voluptatibus, alias labore
          sed?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook className="icon" />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter className="icon" />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram className="icon" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          580 Truong Chinh, Dong Da, Ha Noi
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +84 969 630 128
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          khacchang128@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
