import React from 'react'
import { Container,Title,Wrapper,InnerContainer,ImageContainer,VMargin,HMargin,InfoText,AboutData,Button,Background,Description } from '../commonStyles/style'
import img from '../../assets/images/profile.jpg'


export default function About() {
  return (
      <Container id="about" direction={"column"} padding={5}>
          <Background/>
        <InnerContainer>
          <Title Color={"#fff"} size={2} data-aos={"fade-down"} data-aos-offset={"100"}>About Me</Title>
          <VMargin margin={20}/>
          <Wrapper >
            <div data-aos={"fade-up"}>
                <ImageContainer  oval={true}>
                  <img alt="profile pic" src={img} />
                </ImageContainer>
                <VMargin margin={5}/>
              <InfoText Color={'#FFF'}>DEVELOPER<br/>SPORT LOVER | CODER</InfoText>
            </div>
            <HMargin margin={30}/>
            <AboutData data-aos={"fade-right"}>
                <Description >
                  {'I am a sophomore at College of Engineering(Coe) Guindy pursuing bachelors in Information Technology with a passion towards Web Technologies and Machine Learning '}
                </Description>
                <VMargin margin={15}/>
                <Description  >
                  {'I am go-getter and intend to put in my efforts towards channelizing my knowledge and skills while moving ahead with my career'}
                </Description>
                <VMargin margin={15}/>
                <Description  >
                  {'Sort of person who build projects to learn specific technology not to look them nicer. Apart from Coding, I would love Sports and reading books'}
                </Description>
                <VMargin margin={10}/>
                <Button size="sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={'www.canva.com/design/DAEfZUJwBtI/uLxbSc_VDvlzvzyqV47aoA/view?utm_content=DAEfZUJwBtI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'}
                  >
                    Resume
                  </a>
                </Button>
            </AboutData>
          </Wrapper>
        </InnerContainer>
      </Container>
  )
}
