// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import TrustedBrands from './Components/TrustedBrands';
import Email from './Components/Email';
import MAIL2 from './Components/MAIL2';
import Marketing from './Components/Marketing';
import Pribox from './Components/Pribox';
import Review from './Components/Review';
import Blog from './Components/Blog';
import Service from './Components/Service';
import FAQs from './Components/FAQs';
import SpanSection from './Components/SpanSection';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <TrustedBrands />
      <Email />
      <MAIL2 />

      <Marketing />

      < Pribox />
      
      <Review />

      <Blog />

      <Service />

      <FAQs />
      
      <SpanSection />

      <Footer />

    </>
  )
  
}

export default App;