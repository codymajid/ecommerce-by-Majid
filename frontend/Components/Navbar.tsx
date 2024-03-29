import { SearchSharp, ShoppingBasket } from '@mui/icons-material'
import { Badge } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { mobile } from './Responsive'

const Container = styled.div`
height: 60px;
background-color: transparent;
color: black;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
${mobile({ padding: "10px 0px" })}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: start;
    padding-left: 12px;
    align-items: center;
    gap: 1rem;
`


const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Logo = styled.h1`
font-size: 22px;
color: black;
font-weight: 600;
${mobile({ fontSize: "18px", marginLeft: "7px" })}

`

const Right = styled.div`
    flex: 1;
    justify-content: flex-end;
${mobile({ justifyContent: "center" })}

`
const Language = styled.span`
    font-size: 14px;
${mobile({ display: "none" })}


`

const Search = styled.div`
    background-color: white;
    /* padding: 0px 0px 0px 10px; */
    display: flex;
    border-radius: 5px;
    width: 47%;
    border: 1px solid lightgray;
    height: 32px;
    border: "none"

`


const Input = styled.input`
  border: none;
  flex: 4;
  padding-left: 5px;
  width: 100%;
${mobile({ width: "50px", border: "1px solid lightgray" })}

`


const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: black;
    flex: 1;
    cursor: pointer;
${mobile({ border: "1px solid lightgray" })}

`

const RightSec = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 1rem;
margin-right: 22px;
${mobile({ gap: "0.8rem" })}


`
const BodyRight = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: black;
    cursor: pointer;
${mobile({ fontSize: "14px" })}

`


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <Search>
                        <Input placeholder='Search here' />
                        <Icon>
                            <SearchSharp />
                        </Icon>
                    </Search>
                </Left>
                <Link href={"/"}><Center> <Logo>  Shop wid Majid </Logo> </Center></Link>
                <Right>
                    <RightSec>
                        <Link href={"/login"}><BodyRight>SignIn </BodyRight></Link>
                        <Link href={"/register"}><BodyRight>SignUp </BodyRight></Link>
                        <BodyRight> <Badge badgeContent={quantity} color="primary">
                            <ShoppingBasket />
                        </Badge> </BodyRight>
                    </RightSec>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;