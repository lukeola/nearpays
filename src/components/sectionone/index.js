import React from 'react'
import { Box1, Box1bg, Box2, Box2bg, Box3, Box3bg, BoxContainer, Boxes, BoxHeading, BoxText, SectionOneContainer, SectionOneHeader, SectionOneText } from './SectionOneElements'

const SectionOne = () => {
  return (
    <SectionOneContainer>
      <SectionOneText> Why Nearpays</SectionOneText>
      <SectionOneHeader>Access the best payment management system to suit your lifestyle.</SectionOneHeader>
      <BoxContainer>
        <Boxes>
          <Box1>
            <BoxHeading>One app, multiple Benefits</BoxHeading>
            <BoxText>Connect all your banking needs to your phone and complete payment requests on your terms</BoxText>
          </Box1>
          <Box1bg/>
        </Boxes>

        <Boxes>
          <Box2>
            <BoxHeading>Payments on the go</BoxHeading>
            <BoxText>Connect all your banking needs to your phone and complete payment requests on your terms</BoxText>
          </Box2>
          <Box2bg/>
        </Boxes>

        <Boxes>
          <Box3>
            <BoxHeading>Seamless Online transactions</BoxHeading>
            <BoxText>Connect all your banking needs to your phone and complete payment requests on your terms</BoxText>
          </Box3>
          <Box3bg/>
        </Boxes>
      </BoxContainer>
    </SectionOneContainer>
  )
}

export default SectionOne