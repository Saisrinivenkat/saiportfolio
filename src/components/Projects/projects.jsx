import React,{ useState,useEffect } from 'react'
import { Container,Title,Wrapper,VMargin,Button,SmallCont,HMargin,ImageContainer,InnerContainer,AboutData, Description, TextColor, Background } from '../commonStyles/style'
import oxy from '../../assets/images/oxyfinder.png'
import serv from '../../assets/images/serverless.jpg'
import invis from '../../assets/images/project.jpg'
import hub from '../../assets/images/hubhack.jpg'
import port from '../../assets/images/portfolio.jpg'


const projects = [
  {
    id: 434,
    img: hub,
    title: 'HubHack',
    info: 'ReactJS(styled-components and more libraries ),Responsiveness',
    info2: 'It is a platform that helps you search various Github Users and Respositories based on various criteria and view information in a well organized manner',
    url: 'https://quirky-morse-156a90.netlify.app/',
    repo: 'https://github.com/Saisrinivenkat/Hubhack',
  },
  {
    id: 90,
    img: oxy,
    title: 'OxyFinder',
    info: ' Nodejs(express), Nosql(MongoDB),OAuth',
    info2: ' Many covid patients have suffered for oxygen cyclinder during covid high spread in india. In order to help those people I developed a web based platform which offers people to put their need and might get help from others.',
    url: 'https://message-poster.herokuapp.com/home',
    repo: 'https://github.com/Saisrinivenkat/simple_messager',
  },
  {
    id: 32,
    img: serv,
    title: 'Serverless React App',
    info: ' React JS, Azure functions(Serverless)',
    info2: " This site is done with the request of my high school buddies. They want to create a site to know the birthdays of peoples who are studied together. So I created the site using React on frontend and for the backend i used MongoDB.",
    url: 'https://cbiofficial.herokuapp.com/',
    repo: 'https://github.com/Saisrinivenkat/cbiofficial', 
  },
  {
    id: 234,
    img: port,
    title: 'PortFolio',
    info: 'ReactJS(InterMediate)',
    info2: ' Simple PortFolio so that I can share my skills and details to everyone. Take a look at it.',
    url: '#',
    repo: '',
  },
  {
    id: 23645,
    img: invis,
    title: 'Invisible cloak',
    info: ' Python, OpenCV',
    info2: ' As I already said Im passionate to explore Machine Learning. So this was my first step towards ML. I learnt how to analyze images using OpenCV and learnt some morphological features.',
    url: '',
    repo: 'https://github.com/Saisrinivenkat/Invisible-Cloak',
  },
  {
    id: 2376574,
    img: invis,
    title: 'Safe Key Secure Manager',
    info: ' C++,Data Structures UseCase',
    info2: 'Cli Based app that helps to manage your user credentials and storing that in a file',
    url: '',
    repo: 'https://github.com/Saisrinivenkat/Password-management',
  },
];

export default function Projects() {
  const [more, setMore] = useState(false);
  const [IsMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  const MoreProjects = ()=>{
    setMore(!more);
  }

  const projectsData = more?projects:projects.slice(0,3);

  return (
      <Container>
        <Background direction={"left"}/>
        <InnerContainer >
          <Title size={2} Color={'#fff'} data-aos="zoom-in"> Projects </Title>
          <VMargin margin={40} />
          {projectsData.map((project) => {
            const { title, info, info2, url, repo, img, id } = project; 
            return (
              <Wrapper key={id} marginB={50}>
                <AboutData data-aos="fade-up-right">
                      <Title size={1.5}>{title}</Title >
                      <div>
                        <Description size={1}> 
                          <TextColor Color={"#000"}>Tech stack learned through it: </TextColor>
                          {info}
                        </Description>
                        <VMargin margin={10}/>
                        <Description size={1}  >
                          <TextColor Color={"#000"}>About this project: </TextColor>
                          {info2}
                          </Description>
                      </div>
                      <VMargin margin={10} />
                      <SmallCont>
                        {url &&<a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={url}
                        >
                          <Button size={"sm"} Color={"#000"}>See Live</Button>
                        </a>}
                        {url &&  <HMargin margin={10}/>}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={repo}
                        >
                          <Button size={"sm"} Color={"#000"}>Source Code</Button>
                        </a>
                      </SmallCont>
                </AboutData>
                <HMargin margin={20} />
                <div data-aos={IsMobile?"fade-up":"fade-up-left"}>
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <ImageContainer shadow={'lt'} sizeX={24} sizeY={17}>
                          <img src={img} alt={title} />
                        </ImageContainer>
                      </a>
                </div>
              </Wrapper>
            );
          })}
          <Button size={"sm"} Color={"#0aa"} onClick={MoreProjects} type="button">{!more?"View More":"View Less"}</Button>
        </InnerContainer>
      </Container>
  )
}

