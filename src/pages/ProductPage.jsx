import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addProduct } from '../redux/cartRedux';
import { mobile } from '../responsive';

const Container = styled.div`
    overflow: hidden;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
  ${mobile({ padding: "20px", flexDirection: "column" })}

`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
      ${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "0" })}

`
const Title = styled.h1`
  ${mobile({ marginTop: "10px" })}

`
const Desc = styled.p`
    margin: 20px 0px;
    line-height: 1.5;
    font-weight: 300;

`
const Price = styled.span`
    font-weight: 500;
    font-size: 18px;
`
const Button = styled.button`
    padding: 10px 25px;    
    border: 1px solid #cd5a80;
    text-transform: uppercase;
    
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    margin-top: 20px;
    display: block;
    background-color: #cd5a80;
    color: white;

    &:hover {
        background-color: white;
        color: black;
    }

`
function ProductPage() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const quantity = 1;

  const handleAddToCart = () => {
    dispatch(addProduct({...product, quantity}));
  }

  useEffect(() => {
    const getProduct = async () => {
        try {
            const product = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(product.data);
        } catch (error) {
            
        }
    }
    getProduct();
  }, [productId]);

  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src={product.image}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>Category: {product.category}</Desc>
                <Desc>{product.description}</Desc>
                <Price>$ {product.price}</Price>
                <Button onClick={handleAddToCart}>Add to cart</Button>
            </InfoContainer>
        </Wrapper>
    </Container>

  )
}

export default ProductPage

