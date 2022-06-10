import styled from 'styled-components';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material'; 
import ProfileMenu from './ProfileMenu';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
const Left = styled.div`

`
const Logo = styled.div`

`
const Center = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MenuItem = styled.div`

`

function Navbar() {
  const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
        <Left>
            <Logo>
                <Link to='/'>
                    <StoreIcon sx={{ fontSize: 40, color: "deeppink" }}/>
                </Link>
            </Logo>           
        </Left>
        <Center>
            <SearchBar />
        </Center>
        <Right>
            <MenuItem>
                <Link to='/cart' style={{ textDecoration: "none", color: "black" }}>
                    <Badge badgeContent={quantity} color="success">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </Link>   
            </MenuItem>
            <ProfileMenu />
        
        </Right>
    </Container>
  )
}

export default Navbar