import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Compo/Home';
import About from './Compo/About';
import { sliderData } from './Compo/SliderData'
import Footer from './Compo/Footer';
import SideBar from './Compo/SideBar';
import Todo from './Compo/Todo';

function App() {
  return (
    <div >
      {/* <Navbar/>
      <SideBar />
      <Home slides={sliderData}/>
      <About />
      <Footer  /> */}

      <Todo/>

    </div>
  );
}

export default App;
