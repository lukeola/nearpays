import React from 'react'
import { HeroContainer, HeroHeader} from './HeroElements'
import AnimatedText from 'react-animated-text-content';
import Slideshow from '../swipper/swipper';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader>
      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        The modern way to help you move money.
      </AnimatedText>
      
      </HeroHeader>

      <Slideshow/>
    </HeroContainer>
  )
}

export default HeroSection