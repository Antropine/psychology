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
import Form from './components/form/form';
import Place from './components/place/place';
import Result from './components/result/result';

import About from './components/about/about';
import Policy from './components/policy/policy';
import Agreement from './components/policy/agreement';

import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Howwork />
      <Assortment />
      <Form />
      <Specialists />
      <Result />
      <Place />
      <Map />
      <Faq />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/agreement' element={<Agreement />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;