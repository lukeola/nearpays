import React from 'react'
import { LefsideImg, Leftside, Leftsidebg, Rightside, RightsideHeading, RightsideText, SectionThreeContainer } from './SectionThreeElements'
import Iphone from '../../images/phone.png'
// import Slide1 from '../../images/slide1.png'


const SectionThree = () => {
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
        <RightsideHeading>Virtual POS</RightsideHeading>
        <RightsideText>
        Charge and debit NFC-enabled cards with your smartphone
        Steer your business towards a new level of financial transactions
   (Your smartphone becomes your POS Terminal)
        </RightsideText>
      </Rightside> 
    </SectionThreeContainer>
  )
}

export default SectionThree