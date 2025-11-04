import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Dammi from './components/Dammi';
// import ChipCards from './components/ChipCards';
import About from './components/About';
import Section from './components/Section';
import Vision from './components/Vision';
import Footer from './components/Footer';
import ProcessSection from './components/ProcessSection';
import HeroSection from './components/HeroSection'; 


function App() {
  return (
    <div>
      <Dammi/>
      <Home />
      <HeroSection/>
      <About />
      {/* <ChipCards/> */}
      <Section/>
      {/* <ProcessSection/> */}
      <Vision/>
      <Footer/>
      {/* <Header/> */}
    </div>
  );
}

export default App;
