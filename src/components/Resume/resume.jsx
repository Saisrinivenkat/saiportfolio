import React from 'react'
import {ResumeContainer,InnerContainer,Container, Title} from '../commonStyles/style'


export default function Resume() {
  return (
    <Container id="resume">
      <InnerContainer>
        <Title size={2}>Resume</Title>
        <ResumeContainer data-aos="zoom-in">
          <iframe title="resume" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIsRKIr3DG1QjURNxrCf8az%2FUntitled%3Fnode-id%3D1%253A2" allowfullscreen></iframe>

        </ResumeContainer>
      </InnerContainer>
    </Container>
  )
}
