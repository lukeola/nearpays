import React, {useState} from 'react'
import Footer from '../../components/footer'
import { FaqAnswer, FaqContainer, FaqHeader, Faqicons, Faqitems, FaqQuestion, Faqwrapper, LeftSide, Moretext, RightSide } from './FaqElements'
import './faq.css'
import Navbar from '../../components/navbar'


const FaqSection = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    
    <> 
    <Navbar/>
    <FaqContainer>
    
        <LeftSide>
              <FaqHeader>FAQs</FaqHeader>
          </LeftSide>

          <RightSide>
              <Faqwrapper>
              {data.map((item, i) => (
                <React.Fragment key={item.Id} >
                <Faqitems onClick={() => toggle(i)}>
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
    <Footer/>
    </>

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
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:5
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:6
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:7
  },

  {
    Question: 'What is NearPays?',
    Answer: 'Nearpays is the modern way to help you move money',
    Id:8
  }
]

export default FaqSection