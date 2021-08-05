import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: ${({ minHeight }) => minHeight? minHeight + 'vh' :`100%`};
  width: 100%;
  z-index: 10;
  align-items: center;
  background-color: ${ ({bg})=> bg?bg:'#fff' };
  flex-direction: ${({ direction }) => direction?direction:'row'};
  position: relative;
`
export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height? height + 'px' :`100%`};
  padding:3rem;
  background-color: ${({ Color }) => Color?Color:`#5C5C5C`};
`

export const VMargin = styled.div`
  display: flex;
  margin: ${({ margin }) => margin?margin+'px':`auto`} 0;
`
export const HMargin = styled.div`
  display: flex;
  margin: 0 ${({ margin }) => margin?margin+'px':`auto`} ;
`

export const Wrapper = styled.div`
  width: 100%;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction?direction:'row'};
  justify-content: ${({ direction }) => direction? "auto":"center"};
  align-items: center;
  margin-bottom: ${({ marginB }) => marginB?marginB+'px':`0`};

  @media screen and (max-width: 1000px){
    flex-direction: column;
    justify-content: center;
  }
`

export const Title = styled.div`
  font-size: ${({ size }) => size?size + 'rem':'3.5rem'};
  font-weight: 700;
  z-index: 5;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ Color }) => Color?Color:`#fff`};
  @media screen and (max-width: 1200px){
    font-size: 1rem;
    text-align: center;
  }
`
export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 550;
  text-align: left;
  color: ${({ Color }) => Color?Color:`#fff`};
  @media screen and (max-width: 1000px){
    font-size: .8rem;
  }
`
export const SmallCont = styled.div`
  display: flex;
  z-index: 3;
`

export const Button = styled.button`
  background-color: transparent;
  width: fit-content;
  color: ${({ Color }) => Color?Color:`hsl(336, 80%, 65%)`};
  padding: ${({ size }) => size==='sm'?'.2em':`.5em`} ${({ size }) => size==='sm'?'1em':`2em`};
  font-size: ${({ size }) => size==='sm'?'1.3em':`1.5rem`};
  font-weight: 800;
  border: 1px solid ${({ Color }) => Color?Color:`#E82C77`};
  outline: none;
  position: relative;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  z-index: 3;
  font-family: Montserrat;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: ${({ Color }) => Color?Color:`#E82C77`};

    transition: transform 200ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover {
    color: #fff;
    &::before{
      transform: scaleX(1);
    }
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 769px){
    padding: ${({ size }) => size==='sm'?'.3em':`.3em`} ${({ size }) => size==='sm'?'.5em':`1em`};
    font-size: 1rem;
  }
`
export const Description = styled.h4`
  font-weight: 400; 
  margin:0;
  font-size: ${({ size }) => size? size + 'rem':`1.2rem`};;
  color:#000;
  text-align:left;
  cursor: pointer;
  color: ${({ Color }) => Color?Color:`#fff`};

  @media screen and (max-width: 769px){
    text-align: center;
    font-size: 1rem;

  }
`;

export const TextColor = styled.span`
  color: ${({ Color }) => Color?Color:`auto`};
  font-weight: bold;
`

export const ImageContainer = styled.div`
  width: ${({ sizeX }) => sizeX?sizeX+'em':`20em`};
  height: ${({ sizeY }) => sizeY?sizeY+'em':`20em`};
  -webkit-box-shadow: ${({ shadow }) => shadow==='lt'?`25px 11px 48px 10px rgba(0,0,0,0.35)`:`25px 11px 48px 10px rgba(0,0,0,0.68)`}; 
  box-shadow: ${({ shadow }) => shadow==='lt'?`25px 11px 48px 10px rgba(0,0,0,0.35)`:`25px 11px 48px 10px rgba(0,0,0,0.68)`};
  transition: all 300ms ease-in-out;
  img{
    border-radius: ${({ oval }) => oval?'50%':`auto`};
    border: 1px dotted #000;
    width: 100%;
    height: 100%;
  }

  &:hover{
    transform: scale(1.2);
  }
  @media screen and (max-width: 1000px){
    width: ${({ sizeX }) => sizeX?18+'em':`18em`};
    height: ${({ sizeX }) => sizeX?11+'em':`18em`};
    margin-top: 20px;
  }
`

export const InfoText = styled.h4`
  font-weight: 600; 
  margin:0;
  font-size: .9rem;
  color:#000;
  text-align:center;
  cursor: pointer;
  color: ${({ Color }) => Color?Color:`auto`};
`
export const AboutData = styled.div`
  padding-top: 1rem;
  width: 35vw;
  display: flex;
  flex-direction: column;
  z-index: 5;

  @media screen and (max-width: 769px){
    width: 100%;
    align-items: center;
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #BB4444;
  clip-path: ${({ direction }) => direction === 'left'?`polygon(0 100%, 100% 100%, 0 0)`:`polygon(0 0, 100% 100%, 100% 0)`}; ;

`

export const ContactCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.div`
  color: #fff;
  font-size: 25px;
  cursor:pointer;
  transition: all 200ms ease-in-out;
  transform: scale(1);
  &:hover{
    color: #AAAAAA;
    transform: scale(1.2);
  }
`

export const FooterCont = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  background-color: #5C5C5C;

  @media screen and (max-width: 1000px){
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;

  }
`

export const FooterTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  z-index: 5;
  text-align: left;
  color: ${({ Color }) => Color?Color:`#fff`};
  @media screen and (max-width: 1000px){
    margin-top: 5px;
    font-size: .8rem;
  }
`