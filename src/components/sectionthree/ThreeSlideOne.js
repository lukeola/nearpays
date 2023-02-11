import React from 'react'
import { LefsideImg, Leftside, Leftsidebg, Rightside, RightsideHeading, RightsideText, SectionThreeContainer} from './SectionThreeElements'
import Iphone from '../../images/phone.png'


const ThreeSlideOne = () => {
  return (
    <SectionThreeContainer>
      <Leftside>
        <Leftsidebg>
          <LefsideImg>
            <img src={Iphone} alt='' style={{objectFit:'fill', height:'100%', width:'100%'}}/>
          </LefsideImg>
        </Leftsidebg>
      </Leftside>

      <Rightside>
        <RightsideHeading>Virtual POS</RightsideHeading>
        <RightsideText >
        Charge and debit NFC-enabled cards with your </RightsideText>
        <RightsideText >smartphone.</RightsideText>
        <RightsideText >Steer your business towards a new level of financial </RightsideText>
        <RightsideText >transactions.</RightsideText>
        {/* <RightsideText >(Your smartphone becomes your POS Terminal)</RightsideText> */}
        
      </Rightside> 
    </SectionThreeContainer>
  )
}

export default ThreeSlideOne