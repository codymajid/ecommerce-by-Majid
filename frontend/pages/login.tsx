import Link from 'next/link';
import React from 'react'
import styled, { isStyledComponent } from 'styled-components';
import { mobile } from '../Components/Responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     display: flex;
  align-items: center;
  justify-content: center;

`
const Wrapper = styled.div`
display: flex;
width: 40%;
background-color: white;
padding: 20px;
flex-direction: column;
  ${mobile({ width: "75%" })}


`
const Title = styled.h1`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 32px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`



const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`



const Button = styled.button`
    border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  width: 40%;
  margin-top: 10px;
`
const Details = styled.span`
    font-size: 16px;
    font-weight: 300;
    display: flex;
    gap: 0.5rem;
    margin-top: 10px;
`
const Anc = styled.span`
    font-size: 16px;
    font-weight: 300;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    SignIn
                </Title>
                <Form>
                    <Input type={"text"} placeholder='Username' />
                    <Input type={"password"} placeholder='Password' />
                    <Button>SignIn</Button>
                </Form>
                <Details>
                    Forgot Password?
                    <Link href={'/register'}><Anc>Recover</Anc></Link>

                </Details>
                <Details>
                    Don't have an Account?
                    <Link href={'/register'}><Anc>Create a new one</Anc></Link>
                </Details>
            </Wrapper>
        </Container>
    )
}

export default Login;