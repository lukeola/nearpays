import React from 'react'
import { LefsideImg, Leftside, Leftsidebg, Rightside, RightsideHeading, RightsideText, SectionThreeContainer} from './SectionThreeElements'
import Iphone from '../../images/slide2.png'


const ThreeSlideTwo = () => {
  return (
    <SectionThreeContainer>
      <Leftside>
        <Leftsidebg>
          <LefsideImg>
            <img src={Iphone} alt='' style={{objectFit:'fill', height:'1005', width:'100%'}}/>
          </LefsideImg>
        </Leftsidebg>
      </Leftside>

      <Rightside>
        <RightsideHeading>Bank Transfer</RightsideHeading>

        <RightsideText>Conveniently send money from your wallet to any </RightsideText>
        <RightsideText>commercial bank.</RightsideText>
        <RightsideText>Take your bank with you wherever you go only on</RightsideText>
        <RightsideText>Nearpays.</RightsideText>

      </Rightside> 
    </SectionThreeContainer>
  )
}

export default ThreeSlideTwo