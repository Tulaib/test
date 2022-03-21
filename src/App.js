import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Compo/Home';
import About from './Compo/About';
import { sliderData } from './Compo/SliderData'
import Footer from './Compo/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Home slides={sliderData}/>
      <About />
      <Footer  />
    </div>
  );
}

export default App;
