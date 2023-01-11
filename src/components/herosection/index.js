import React from 'react'
import { HeroContainer, HeroHeader, HeroImg } from './HeroElements'
import Heroimage from '../../images/heroimage.png'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader>The modern way to help you move money.</HeroHeader>
      <HeroImg><img src={Heroimage} alt='' style={{objectFit:'fill', height:'100%', width:'100%'}}/></HeroImg>
    </HeroContainer>
  )
}

export default HeroSection