import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import {sliderItems} from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}

`
const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => '#'+props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    margin: 0px 30px;
    flex: 1;
`
const Title = styled.h1`
    font-size: 60px;
    font-weight: 500;
    text-transform: uppercase;
`
const Desc = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: capitalize;
    width: 80%;
    line-height: 1.5;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    text-transform: uppercase;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
        setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((slide) => (
                <Slide bg={slide.bg} key={slide.id}>
                    <ImgContainer>
                        <Image src={slide.img} />
                    </ImgContainer>  
                    <InfoContainer>
                        <Title>{slide.title}</Title>
                        <Desc>{slide.desc}</Desc>
                        <Button>{slide.btnText}</Button>
                    </InfoContainer>
                </Slide>            
            ))};
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider