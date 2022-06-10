import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    margin: 50px 0 30px;
    justify-content: center;
    ${mobile({ flexDirection: "column" })}
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
    text-transform: capitalize;
`
 function Heading({text}) { 
  return (
    <Container>
        <Title>{text}</Title>
    </Container>
  )
}

export default Heading