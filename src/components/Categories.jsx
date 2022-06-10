import styled from 'styled-components'
import { mobile } from '../responsive';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const Container = styled.div`
    display: flex;
    padding: 20px 5px;
    justify-content: center;
    ${mobile({ flexDirection: "column" })}
`

const Categories = ({ setProductCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
        try {
          const categories = await axios.get('https://fakestoreapi.com/products/categories');
          setCategories([...categories.data]);
        } catch(error) {
            
        }
    }
    getCategories();
  })
  
  return (
    <Container>
        {categories.map((item, index) => (
            <Button sx={{ mx: "2rem"}} variant="outlined" key={index} onClick={() => setProductCategory(item)}>{item}</Button>
        ))}
    </Container>
  )
}

export default Categories