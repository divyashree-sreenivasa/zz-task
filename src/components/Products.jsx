import axios from "axios";
import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';


const Container = styled.div`
    padding: 20px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const LoadingContainer = styled.div`
    padding: 20px 5px;
    display: flex;
    justify-content: center;
`

function Products({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
        try {
          setIsLoading(true);
          const products = category === 'all' ? 
                           await axios.get(`https://fakestoreapi.com/products`) 
                           : await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          setIsLoading(false);
          setProducts([...products.data]);

        } catch(error) {
            
        }
    }
    getProducts();
  }, [category])
  return (
    <>
      {isLoading && <LoadingContainer>
         <CircularProgress style={{ display: "block" }}/> 
      </LoadingContainer>}
       
      <Container>
        { 
            products.map((product => (
            <ProductItem item={product} key={product.id}/> 
            )))
        }
      </Container>
      
    </>
    

  )
}

export default Products