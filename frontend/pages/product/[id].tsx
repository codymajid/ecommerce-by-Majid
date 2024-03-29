import React, { useEffect, useState } from 'react'
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Newsletter from '../../Components/Newsletter';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../../Components/Responsive';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';



const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
  const dispatch = useDispatch()
  // const [product, setProduct] = useState({})
  // const location = useRouter()
  // const id = location.pathname.split('/')[2]

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:5000/api/products/find/${id}`)
  //       setProduct(res.data)
  //     } catch (error) {
  //       console.log("error in product", error)
  //     }
  //   }
  //   getProduct();
  // }, [id])

  const handleClick = () => {
    dispatch(
      addProduct({ quantity })
    )
  }

  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='/img/ad1.png' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Shirt</Title>
          <Desc>Lorem, ipsum dolor.lorem1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem debitis?Lorem ipsum dolor sit amet consectetur.</Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Product;