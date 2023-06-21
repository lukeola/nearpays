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

//Redux
import { Provider } from 'react-redux'
import store from './store';
import Loading from './pages/loading/Loading';
import Download from './pages/download';



function App() {
  return (
      <Provider store={store}>
      <Router>
      <Routes>
         <Route exact path='/loading'  element={<Loading/>} />
      </Routes>

      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/why-nearpays'  element={<WhyNearpays/>} />
        <Route exact path='/faqs'  element={<FaqSection/>} />
        <Route exact path='/contact-us'  element={<ContactUs/>} />
        <Route exact path='/privacy-policy'  element={<PrivacyPolicy/>} />
        <Route exact path='/more'  element={<Register1/>} />
        <Route exact path='/download'  element={<Download/>} />
        <Route exact path='/sign-up' element={<SignUp/>}/>
        <Route exact path='/sign-in'  element={<SignIn/>} />
        <Route exact path='/profile'  element={<Profile/>} />
        <Route exact path='/success'  element={<Register3/>} />
        <Route exact path='/update/:id' element={<Update />} />
      </Routes>

        <Footer />

     
      </Router>

      </Provider>
    );
}

export default App;