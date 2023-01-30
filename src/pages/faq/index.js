import React, {useState, useEffect} from 'react'
import Footer from '../../components/footer'
import { FaqAnswer, FaqContainer, FaqHeader, Faqicons, Faqitems, FaqQuestion, Faqwrapper, LeftSide, Moretext, RightSide } from './FaqElements'
import './faq.css'
import Navbar from '../../components/navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'


const FaqSection = () => {

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
    
    <> 
    <Navbar/>
    <FaqContainer>
    
        <LeftSide>
              <FaqHeader>FAQs</FaqHeader>
          </LeftSide>

          <RightSide>
              <Faqwrapper data-aos='fade-up'>
              {data.map((item, i) => (
                <React.Fragment key={item.Id}  >
                <Faqitems onClick={() => toggle(i)} data-aos='fade-up'>
                  <FaqQuestion onClick={() => toggle(i)} >{item.Question}</FaqQuestion>
                  <FaqAnswer className={selected === i ? 'content show' : 'content'}>{item.Answer}</FaqAnswer>
                  <Faqicons><span>{selected === i ? "-" : "+"}</span></Faqicons>
                </Faqitems>
                </React.Fragment>
              ))}
              </Faqwrapper>
          <Moretext>Have more questions? <a href='/contact-us' style={{textDecoration:'none', color:'#5DAF60'}}>Contact Us</a></Moretext>
          </RightSide>
    </FaqContainer>
    <div style={{position:'absolute', top:'1174px', width:'100%'}}>
    <Footer />
    </div>
    </>
    

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
  },

  {
    Question: 'Do you offer any financial advice?',
    Answer: 'We do not provide financial advice, but we do offer a variety of tools and resources to help our customers make informed financial decisions.',
    Id:5
  },

  {
    Question: 'What services does Nearpays offer?',
    Answer: 'Nearpays offers a wide range of services including personal and corporate banking, virtual debit cards, and online banking.',
    Id:6
  },

  {
    Question: 'How can I open an account with Nearpays?',
    Answer: "To open an account with Nearpays, you will need required documentation such as your ID card, passport, or driver's license, and proof of address. You will also need to provide information about your employment status and income.",
    Id:7
  },

  {
    Question: 'How can I access my account?',
    Answer: "You can access your account through our mobile app. You will need your account number and personal identification number (PIN) to log in. Or create an account with us if you don’t have one.",
    Id:8
  }
]

export default FaqSection