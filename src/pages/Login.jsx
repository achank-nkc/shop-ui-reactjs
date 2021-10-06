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
  width: 25%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px lightgray;
  ${tablet({ width: "70%" })}
`;
const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
`;
const Link = styled.a`
  font-size: 1rem;
  margin: 10px 0px;
  cursor: pointer;
  text-decoration: underline;
`;
const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px auto;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
