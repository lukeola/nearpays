import React, {useState} from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar/Navbar'
import { FaqAnswer, FaqContainer, FaqHeader, Faqicons, Faqitems, FaqQuestion, Faqwrapper, LeftSide, Moretext, RightSide } from './FaqElements'
import './faq.css'

const Faq = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div>
    <Navbar/>
    <FaqContainer>
    <LeftSide>
          <FaqHeader>FAQs</FaqHeader>
          </LeftSide>
          <RightSide>
          <Faqwrapper>
          {data.map((item, i) => (
            <div>
            <Faqitems>
              <FaqQuestion onClick={() => toggle(i)}>{item.Question}</FaqQuestion>
              <FaqAnswer className={selected === i ? 'content show' : 'content'}>{item.Answer}</FaqAnswer>
              <Faqicons><span>{selected === i ? "-" : "+"}</span></Faqicons>
            </Faqitems>
            </div>
          ))}
   
          </Faqwrapper>
          <Moretext>Have more questions? <a href='/contact-us' style={{textDecoration:'none', color:'#5DAF60'}}>Contact Us</a></Moretext>
          </RightSide>
      
    </FaqContainer>
    <Footer/>
    </div>
  )
}

const data = [
  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money'
  }
]

export default Faq