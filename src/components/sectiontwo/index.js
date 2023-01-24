import React, {useEffect} from 'react'
import { BlueLine, Box1, Box2, Box3, BoxesContainer, BoxHeader, BoxItems, BoxNumber, BoxText, GreenLine, SectionTwoContainer, SectionTwoHeader } from './SectionTwoElements'
import Line1 from '../../images/greenline.png'
import Line2 from '../../images/blueline.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const SectionTwo = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);

  return (
    <SectionTwoContainer>
    <SectionTwoHeader>Three simple steps.</SectionTwoHeader>


    <BoxesContainer>
    <GreenLine>
      <img src={Line1} alt='' style={{objectFit:'fill', width:'100%', height:'100%'}}/>
    </GreenLine>


      <BoxItems data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
        <Box1>
        <BoxNumber>1</BoxNumber>
        <BoxHeader>Create a nearpay account</BoxHeader>
        <BoxText>There are nerve-wracking means of payment and there is us, simplicity and ease. Create a Nearpays account and give you, your customers, and your business something you have never seen before.</BoxText>
        </Box1>      
      </BoxItems>
      

      <BoxItems data-aos="fade-up"  data-aos-offset="100">
        <Box2>
        <BoxNumber>2</BoxNumber>
        <BoxHeader>Save time and spend money in comfort and style.</BoxHeader>
        <BoxText>Have all your banking needs on your smartphone; pay and get paid at the flick of your fingers. No waiting time, and no ridiculous charges.</BoxText>
        </Box2>
      </BoxItems>

      <BoxItems data-aos="fade-left">
        <Box3>
        <BoxNumber>3</BoxNumber>
        <BoxHeader>Pay when you want, how you want it</BoxHeader>
        <BoxText>See what you like? Want to send money fast? Use Nearpays. POS transactions, wallet transactions, or bank transfers—we've got you covered.</BoxText>
        </Box3>
      </BoxItems>
      <BlueLine>
    <img src={Line2} alt='' style={{objectFit:'fill', width:'100%', height:'100%'}}/>
    </BlueLine>
    </BoxesContainer>
   
    </SectionTwoContainer>
  )
}

export default SectionTwo