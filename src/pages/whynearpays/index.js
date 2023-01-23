import React ,{useState}from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { Downheader, DownImage, Downline, Downtext, WhyFaqAnswer, WhyFaqicons, WhyFaqitems, WhyFaqQuestion, WhyFaqwrapper, FiveHeader, Header, LeftSide, WhyMoretext, RightSide, SectionFive, SectionFour, SectionFourDown, SectionFourUp, SectionOne,  SectionTwo, Text,  Upheader, Upline, Uptext, WhyContainer } from './WhyElements'
import Bgimg from '../../images/bgimage.png'
import Fourimg from '../../images/fourimage.png'
import './why.css'
const WhyNearpays = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <WhyContainer>
      <Navbar/>
      <SectionOne>
      <Header>Nearpays is a full-service financial payment platform</Header>
      <Text>
      Nearpays is a full-service financial payment platform that acts as an end-to-end financial service for all our clients. We have created various features to simplify online payments as much as possible, based on the principle that payments should be seamless. We have also developed a way to put point-of-sale transactions back into the hands of our users. The experience is simple, on the go, and comes with no extra bank charges for all our users.
      </Text>
      </SectionOne>

      <SectionTwo>
      <img src={Bgimg} alt='' style={{objectFit:'fill', height:'1005', width:'100%'}}/>
      </SectionTwo>

      {/* <SectionThree>
        <ThreeHeader>Meet the founder</ThreeHeader>
        <ThreeText1>OpenAI’s mission is to ensure that artificial general intelligence (AGI)—by which we mean highly autonomous systems that outperform humans at most economically valuable work—benefits all of humanity.</ThreeText1>
        <ThreeText2>We will attempt to directly build safe and beneficial AGI, but will also consider our mission fulfilled if our work aids others to achieves outcome.</ThreeText2>
      </SectionThree> */}

      <SectionFour>
        <SectionFourUp>
          <Upheader>The Next Generation Payment Method</Upheader>
          <Uptext>
            Making payments should be easy, smart and seamless. Thats’s what we are all about. Access and make payments globally without having to worry about how you money moves. At Nearpays, stay up to date and follow all your transactions across diferent banks in one place
          </Uptext>
          <Upline/>
        </SectionFourUp>

        <SectionFourDown>
          <DownImage>
            <img src={Fourimg} alt='' style={{objectFit:'fill', width:'100%', height:'100%'}}/>
          </DownImage>
          <Downheader>Take Control Of Your Payments</Downheader>
          <Downtext>
            Let’s help you make your money work for you. This single integration payment platform gives you full control of your cards and up to date clarity of your funds. You shouldn’t break a sweat to make money and break even more managing your finances. Let Nearpays do that for you.
          </Downtext>
          <Downline/>
        </SectionFourDown>
      </SectionFour>

      <SectionFive>
          <LeftSide>
          <FiveHeader>WhyFaqs</FiveHeader>
          </LeftSide>
          <RightSide>
          <WhyFaqwrapper>
          {data.map((item, i) => (
            <React.Fragment key={item.Id}>
            <WhyFaqitems>
              <WhyFaqQuestion onClick={() => toggle(i)}>{item.Question}</WhyFaqQuestion>
              <WhyFaqAnswer className={selected === i ? 'why-content show' : 'why-content'}>{item.Answer}</WhyFaqAnswer>
              <WhyFaqicons><span>{selected === i ? "-" : "+"}</span></WhyFaqicons>
            </WhyFaqitems>
            </React.Fragment>
          ))}
   
          </WhyFaqwrapper>
          <WhyMoretext>Have more questions? <a href='/contact-us' style={{textDecoration:'none', color:'#5DAF60'}}>Contact Us</a></WhyMoretext>
          </RightSide>
        </SectionFive>

      <Footer/>
    </WhyContainer>
  )
}

const data = [
  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:1
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:2
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:3
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:4
  }
]

export default WhyNearpays