import React, {useEffect} from 'react'
import {  BoxContainer, Boxes, BoxHeading, BoxText, SectionOneContainer, SectionOneHeader, SectionOneRight, SectionOneLeft, ImageContainer, Boxicon} from './SectionOneElements'
import Aos from 'aos'
import 'aos/dist/aos.css';
import AnimatedText from 'react-animated-text-content';
import Phoneimg from '../../images/sectionone.png'
import Icon1 from '../../images/convinience.png'
import Icon2 from '../../images/secure.png'
import Icon3 from '../../images/access.png'
import Icon4 from '../../images/speed.png'

const SectionOne = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);

  return (
    <SectionOneContainer>
    
      <SectionOneLeft>
        <ImageContainer><img src={Phoneimg} alt='' style={{objectFit:'contain', height:'100%', width:'100%'}} /></ImageContainer>
      </SectionOneLeft>

      <SectionOneRight>
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
        Why Nearpays is the Best!
      </AnimatedText>
      
      </SectionOneHeader>

      <BoxContainer>

        <Boxes data-aos="zoom-in">
            <Boxicon ><img src={Icon1} alt='' style={{objectFit:'contain', height:'100%', width:'100%'}}/></Boxicon>
            <BoxHeading>1. <span style={{marginLeft:'10px'}}>Convenience</span></BoxHeading>
            <BoxText>Nearpays allows users to make cashless transactions using their mobile devices, eliminating the need for physical cash or cards. This means that users can make payments anytime, anywhere, without having to carry cash or worry about finding an ATM or bank.
            </BoxText>
        </Boxes>

        <Boxes data-aos="zoom-in">
            <Boxicon><img src={Icon2} alt='' style={{objectFit:'contain', height:'80%', width:'100%'}}/></Boxicon>
            <BoxHeading>2. <span style={{marginLeft:'10px'}}>Security</span></BoxHeading>
            <BoxText>Now you don't have to pull out your cards, simply pay with your phone</BoxText>
        </Boxes>

        <Boxes data-aos="zoom-in">
            <Boxicon><img src={Icon3} alt='' style={{objectFit:'contain', height:'100%', width:'100%'}}/></Boxicon>
            <BoxHeading>3. <span style={{marginLeft:'10px'}}>Accessibility</span></BoxHeading>
            <BoxText>Nearpays is designed to be user-friendly and accessible to all, regardless of their level of digital literacy. The platform is supported by a dedicated customer service team that is available to assist users with any issues or questions they may have.
            </BoxText>
        </Boxes>

        <Boxes data-aos="zoom-in">
            <Boxicon><img src={Icon4} alt='' style={{objectFit:'contain', height:'100%', width:'100%'}}/></Boxicon>
            <BoxHeading>4. <span style={{marginLeft:'10px'}}>Speed</span></BoxHeading>
            <BoxText>Nearpays transactions are processed in real-time, meaning that payments and transfers are completed quickly and efficiently.</BoxText>
        </Boxes>

        </BoxContainer>

        </SectionOneRight>
    </SectionOneContainer>
  )
}

export default SectionOne