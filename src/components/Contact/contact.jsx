import React from 'react'

import { Container,Title,InnerContainer, Description,Button, VMargin, ContactCont,Background} from '../commonStyles/style'

export default function Contact() {
  const contactData = {
    info: 'Connect with Me? Always open to suggestions',
    btn: 'https://twitter.com/saisrinivenkat_',
    email: 'saisrinivenkat@outlook.com',
  };
  const { info, email } = contactData;

  return (
      <Container >
        <Background />
        <InnerContainer height={450} >
          <ContactCont data-aos="flip-left" data-aos-easing="ease-out-cubic" direction={'column'}>
            <Title size={2.5}>Contact</Title>
            <ContactCont >
              <Description >
                {info}
              </Description>
              <VMargin margin={15}/>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={`mailto:${email}`}
              >
                <Button size={"sm"}>Connect</Button>
              </a>
            </ContactCont>
          </ContactCont>
        </InnerContainer>
      </Container>
  )
}

