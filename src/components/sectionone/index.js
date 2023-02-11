import React, {useEffect} from 'react'
import { Box1, Box1bg, Box2, Box2bg, Box3, Box3bg, BoxContainer, Boxes, BoxHeading, BoxText, SectionOneContainer, SectionOneHeader, SectionOneText } from './SectionOneElements'
import Aos from 'aos'
import 'aos/dist/aos.css';
import AnimatedText from 'react-animated-text-content';

const SectionOne = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);

  return (
    <SectionOneContainer>
      <SectionOneText> Why Nearpays</SectionOneText>
      <SectionOneHeader>

      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="bounce"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Access the best payment management system to suit your lifestyle.
      </AnimatedText>
      
      </SectionOneHeader>
      <BoxContainer>
        <Boxes data-aos='zoom-in'>
          <Box1>
            <BoxHeading>One App, Multiple Benefits</BoxHeading>
            <BoxText>Connect all your banking needs to your phone and complete payment requests on your terms</BoxText>
          </Box1>
          <Box1bg/>
        </Boxes>

        <Boxes data-aos='zoom-in'>
          <Box2>
            <BoxHeading>Payments On The Go</BoxHeading>
            <BoxText>Connect all your banking needs to your phone and complete payment requests on your terms</BoxText>
          </Box2>
          <Box2bg/>
        </Boxes>

        <Boxes data-aos='fade-up'>
          <Box3>
            <BoxHeading>Seamless Online Transactions</BoxHeading>
            <BoxText>Connect all your banking needs to your phone and complete payment requests on your terms</BoxText>
          </Box3>
          <Box3bg/>
        </Boxes>
      </BoxContainer>
    </SectionOneContainer>
  )
}

export default SectionOne