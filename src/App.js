import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Advantages from './components/advantges/advantages';
import Howwork from './components/howwork/howwork';
import Assortment from './components/assortment/assortment';
import Specialists from './components/specialists/specialists';
import Map from './components/map/map';
import Faq from './components/faq/faq';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Hero/>
        <Advantages/>
        <Howwork/>
        <Assortment/>
        <Specialists/>
        <Map/>
        <Faq/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
