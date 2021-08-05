import React,{useState,useEffect} from 'react';
import { Link } from 'react-scroll';

import { Container,Wrapper,HMargin,VMargin,Title,TextColor,SubTitle,Button } from '../commonStyles/style';

export default function Head() {

  const [IsMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return (
      <Container id="title" minHeight={100} bg= {'#5c5c5c'}>
        { !IsMobile && <HMargin margin={50}/>}
        <Wrapper direction={"column"}>
          <Title Color={'#fff'} data-aos={"fade-right"} >
            {'Hey You Visitor I\'m '}
            <TextColor data-aos={"fade-left"}  Color={`#E82C77`}>SAI SRINIVASAN</TextColor>
          </Title>
          <SubTitle Color={'#fff'}>Web Developer | ML Enthususiast</SubTitle>
          <VMargin margin={10}/>
          <div data-aos={"fade-up"} data-aos-easing="ease-out">
            <Link to="about" smooth duration={1000}>
              <Button >
                Know more
              </Button>
            </Link>
          </div>
        </Wrapper>
      </Container>
  )
}
