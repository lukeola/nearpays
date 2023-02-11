import React from 'react'
import { Btn2icon, Leftside, Leftsidebg, Rightside, RightsideHeading, RightsideText, SectionThreeContainer, Twoslidebtn1, Twoslidebtn2, TwoslideHeader, Twosliderbalance, Twoslidewrapper} from './SectionThreeElements'
import Arrowicon from '../../images/ArrowLeft.png'


const ThreeSlideTwo = () => {
  return (
    <SectionThreeContainer>
      <Leftside>
        <Leftsidebg>
          <Twoslidewrapper>
            <Twosliderbalance>WALLET BALANCE</Twosliderbalance>
            <TwoslideHeader>NGN 20,000</TwoslideHeader>
            <Twoslidebtn1>Reciever's Details</Twoslidebtn1>
            <Twoslidebtn2>Transfer to Bank <Btn2icon> <img src={Arrowicon} alt=''/></Btn2icon></Twoslidebtn2>
          </Twoslidewrapper>
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