import React from "react";
import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5fcfd;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px lightgray;
  ${tablet({ width: "70%" })}
`;
const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
  margin: 10px 20px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 20px;
  padding: 10px;
  outline: none;
  ${tablet({ margin: "10px 10px" })}
`;
const Agreement = styled.span`
  font-size: 1rem;
  margin: 20px 0;
  padding: 0px 20px;
`;
const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 0 auto;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
