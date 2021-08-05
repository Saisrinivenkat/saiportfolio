import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

import { Container,FooterTitle,HMargin,Icon,SmallCont,FooterCont, Background } from '../commonStyles/style';

export default function Footer() {

  return (
    <Container >
      <Background direction={"left"}/>
        <FooterCont>
          <SmallCont>
            <FooterTitle size={1}> © {new Date().getFullYear()} - Developed by Sai srinivasan</FooterTitle>
          </SmallCont>
          <SmallCont>
            <a 
            href="https://twitter.com/saisrinivenkat_?s=09" 
            rel="noopener noreferrer"
            target="_blank">
              <Icon>
                <FontAwesomeIcon icon={faTwitter} size={'1x'}/>
              </Icon>
            </a>
            <HMargin margin={10}/>
            <a 
            href="https://www.linkedin.com/in/saivenkat-srini-229384191/" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <Icon>
              <FontAwesomeIcon icon={faLinkedin} size={'1x'}/>
            </Icon>
            </a>
            <HMargin margin={10}/>
            <a 
            href="https://github.com/Saisrinivenkat" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <Icon>
              <FontAwesomeIcon icon={faGithub} size={'1x'}/>
            </Icon>
            </a>
          </SmallCont>
        </FooterCont>
    </Container>
  )
}
