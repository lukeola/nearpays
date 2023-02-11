import React from 'react'
import { LefsideImg, Leftside, Leftsidebg, Rightside, RightsideHeading, RightsideText, SectionThreeContainer} from './SectionThreeElements'
import Iphone from '../../images/card.png'


const ThreeSlideThree = () => {
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
        <RightsideHeading>Debit Card</RightsideHeading>
        <RightsideText>Add multiple debit cards to your mobile phone for</RightsideText>
        <RightsideText>NFC payment.</RightsideText>
        <RightsideText>Find everything you are looking for all in one place.</RightsideText>
        {/* <RightsideText>(If you have multiple debts cards or your cards </RightsideText>
        <RightsideText>are not  NFC enabled)</RightsideText> */}
      </Rightside> 
    </SectionThreeContainer>
  )
}

export default ThreeSlideThree