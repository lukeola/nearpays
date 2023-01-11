import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactUs from './pages/contact-us';
import Faq from './pages/faq';
import Home from "./pages/Home";
import WhyNearpays from './pages/whynearpays';
import Register from './pages/register/index'


function App() {
    return (
      <Router>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/why-nearpays'  element={<WhyNearpays/>} />
        <Route exact path='/faq'  element={<Faq/>} />
        <Route exact path='/contact-us'  element={<ContactUs/>} />
        <Route exact path='/register'  element={<Register/>} />
      </Routes>
      
    </Router>
    );
}

export default App;