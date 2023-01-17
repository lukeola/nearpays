import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactUs from './pages/contact-us';
import Home from "./pages/Home";
import WhyNearpays from './pages/whynearpays';
import Register from './pages/register/index'
import Register2 from './pages/register/register-page-2';
import Register3 from './pages/register/register-page-3';
import FaqSection from './pages/faq';


function App() {
    return (
      <Router>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/why-nearpays'  element={<WhyNearpays/>} />
        <Route exact path='/faq'  element={<FaqSection/>} />
        <Route exact path='/contact-us'  element={<ContactUs/>} />
        <Route exact path='/register'  element={<Register/>} />
        <Route exact path='/register-page-2'  element={<Register2/>} />
        <Route exact path='/register-page-3'  element={<Register3/>} />
      </Routes>
      
    </Router>
    );
}

export default App;