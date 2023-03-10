import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactUs from './pages/contact-us';
import Home from "./pages/Home";
import WhyNearpays from './pages/whynearpays';
import Register3 from './pages/register/register-page-3';
import FaqSection from './pages/faq';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './pages/profile';
import PrivacyPolicy from './pages/privacy-policy';
import Footer from './components/footer';
import Register1 from './pages/register/register-page-1';
import Update from './pages/update';
import CookieConsent from "react-cookie-consent"

import ImageSlidegeSlide from './components/imageslide/ImageSlider';




function App() {
    return (
      <Router>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/why-nearpays'  element={<WhyNearpays/>} />
        <Route exact path='/faqs'  element={<FaqSection/>} />
        <Route exact path='/contact-us'  element={<ContactUs/>} />
        <Route exact path='/privacy-policy'  element={<PrivacyPolicy/>} />
        <Route exact path='/more'  element={<Register1/>} />
        <Route exact path='/sign-up' element={<SignUp/>}/>
        <Route exact path='/sign-in'  element={<SignIn/>} />
        <Route exact path='/profile'  element={<Profile/>} />
        <Route exact path='/success'  element={<Register3/>} />
        <Route exact path='/update/:id' element={<Update />} />
        <Route exact path='/test'  element={<ImageSlidegeSlide/>} />
      
      </Routes>
   
        <Footer />
        <CookieConsent
          debug={true}
          style={{ backgroundColor: '#080808' }}
          buttonStyle={{ color: '#000', backgroundColor: '#5DAF60', marginRight:'20px' }}
          buttonText="Accept"
        ><p style={{ fontSize: '14px', color: '#929B95' }}>This website uses cookies to optimize your experience and to provide us insight on how to interact with the site. All information shared with us through cookies are secured and covered by our data privacy obligation. <span style={{ fontSize: '14px', color: '#929B95' }}>See our </span><a href='/privacy-policy' style={{ textDecoration: 'none', color: '#5DAF60', fontSize: '14px', }}>privacy policy</a> <span style={{ fontSize: '14px', color: '#929B95' }}>for more</span></p></CookieConsent>
    </Router>
    );
}

export default App;