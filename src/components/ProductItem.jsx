import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`
const Image = styled.img`
    width: 250px;
    height: 250px;
    z-index: 2;
    object-fit: contain;
`
const TitleContainer = styled.div`
    margin: 10px 0;
    text-align: center;
    width: 300px;
`
const ProductItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
`
const Title = styled.h3`

`
const Price = styled.h4`
    font-weight: 500;
    margin-top: 10px;
`


const ProductItem = ({item}) => {
  const navigate = useNavigate();
  return (
    <ProductItemContainer onClick={() => navigate(`/products/${item.id}`)}>
    <Container>
        <Image src={item.image} />
    </Container>
    <TitleContainer>
        <Title>{item.title}</Title>
        <Price>$ {item.price}</Price>
    </TitleContainer>
    </ProductItemContainer>
    
  )
}

export default ProductItem