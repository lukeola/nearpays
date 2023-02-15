import React ,{useState, useEffect}from 'react'
// import Navbar from '../../components/navbar'
import { Downheader, DownImage, Downline, Downtext, WhyFaqAnswer, WhyFaqicons, WhyFaqitems, WhyFaqQuestion, WhyFaqwrapper, FiveHeader, Header, LeftSide, WhyMoretext, RightSide, SectionFive, SectionFour, SectionFourDown, SectionFourUp, SectionOne,  SectionTwo, Text,  Upheader, Upline, Uptext, WhyContainer, IconQuestionWrapper } from './WhyElements'
import Bgimg from '../../images/amaka-vic.jpg'
import Fourimg from '../../images/amaka1.jpg'
import './why.css'
import AnimatedText from 'react-animated-text-content';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Navbg } from '../../components/navbar/NavStyles'

const WhyNearpays = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, []);


  return (
    <WhyContainer>
      <Navbg/>
      <SectionOne>
      <Header>
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
        Nearpays is a full-service financial payment platform
      </AnimatedText>
      
      </Header>
      <Text>
      Nearpays is a full-service financial payment platform that acts as an end-to-end financial service for all our clients. We have created various features to simplify online payments as much as possible, based on the principle that payments should be seamless. We have also developed a way to put point-of-sale transactions back into the hands of our users. The experience is simple, on the go, and comes with no extra bank charges for all our users.
      </Text>
      </SectionOne>

      <SectionTwo>
      <img src={Bgimg} alt='' style={{objectFit:'fill', height:'100%', width:'100%'}}/>
      </SectionTwo>

      {/* <SectionThree>
        <ThreeHeader>Meet the founder</ThreeHeader>
        <ThreeText1>OpenAI’s mission is to ensure that artificial general intelligence (AGI)—by which we mean highly autonomous systems that outperform humans at most economically valuable work—benefits all of humanity.</ThreeText1>
        <ThreeText2>We will attempt to directly build safe and beneficial AGI, but will also consider our mission fulfilled if our work aids others to achieves outcome.</ThreeText2>
      </SectionThree> */}

      <SectionFour>
        <SectionFourUp data-aos='fade-right'>
          <Upheader>
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
        The Next Generation Payment Method
      </AnimatedText>

      </Upheader>
          <Uptext>
            Making payments should be easy, smart and seamless. Thats’s what we are all about. Access and make payments globally without having to worry about how you money moves. At Nearpays, stay up to date and follow all your transactions across diferent banks in one place
          </Uptext>
          <Upline/>
        </SectionFourUp>

        <SectionFourDown data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
          <DownImage>
            <img src={Fourimg} alt='' style={{objectFit:'fill', width:'100%', height:'100%'}}/>
          </DownImage>
          <Downheader>
          <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="wave"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Take Control Of Your Payments
      </AnimatedText>
          </Downheader>
          <Downtext>
            Let’s help you make your money work for you. This single integration payment platform gives you full control of your cards and up to date clarity of your funds. You shouldn’t break a sweat to make money and break even more managing your finances. Let Nearpays do that for you.
          </Downtext>
          <Downline/>
        </SectionFourDown>
      </SectionFour>

      <SectionFive>
          <LeftSide>
          <FiveHeader data-aos='fade-right'>Faqs</FiveHeader>
          </LeftSide>
          <RightSide>
          <WhyFaqwrapper>
          {data.map((item, i) => (
            <React.Fragment key={item.Id}>
            <WhyFaqitems data-aos='fade-up'>
            <IconQuestionWrapper>
              <WhyFaqQuestion onClick={() => toggle(i)}>{item.Question}</WhyFaqQuestion>
              <WhyFaqicons><span>{selected === i ? "-" : "+"}</span></WhyFaqicons>
              </IconQuestionWrapper>
              <WhyFaqAnswer className={selected === i ? 'why-content show' : 'why-content'}>{item.Answer}</WhyFaqAnswer>
              
            </WhyFaqitems>
            </React.Fragment>
          ))}
   
          </WhyFaqwrapper>
          <WhyMoretext>Have more questions? <a href='/contact-us' style={{textDecoration:'none', color:'#5DAF60'}}>Contact Us</a></WhyMoretext>
          </RightSide>
        </SectionFive>

  
    </WhyContainer>
  )
}

const data = [
  {
    Question: 'What are the account funding options available?',
    Answer: 'Our platform provides various funding options like bank transfers, credit/debit cards, digital wallets and other payment options.',
    Id:1
  },

  {
    Question: 'Are there any limits on transactions?',
    Answer: 'There may be limits on transactions depending on the account type and verifications. Please check with our customer support team for more information.',
    Id:2
  },

  {
    Question: "What is your company's policy on data privacy?",
    Answer: 'Our company takes data privacy very seriously and we comply with all applicable laws and regulations regarding data protection. Our privacy policy is available on our website, and we encourage you to review it.',
    Id:3
  },

  {
    Question: 'How do I close my account?',
    Answer: 'You can close your account by contacting our customer support team. They will guide you through the process and assist with any questions you may have.',
    Id:4
  }
]

export default WhyNearpays