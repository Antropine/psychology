import './App.css';

// Шаред компоненты
import Header from './components/header/header';
import Footer from './components/footer/footer';

// Секции главной страницы
import Hero from './pages/home/hero/hero';
import Advantages from './pages/home/advantages/advantages';
import Howwork from './pages/home/howwork/howwork';
import Assortment from './pages/home/assortment/assortment';
import Form from './pages/home/form/form';
import SpecialistsSection from './pages/home/specialists/specialists';
import Result from './pages/home/result/result';
import Place from './pages/home/place/place';
import Map from './pages/home/map/map';
import Faq from './pages/home/faq/faq';
import Help from './pages/home/help/help';
import Services from './pages/services/services';

// Отдельные страницы
import About from './pages/about/about';
import Policy from './pages/policy/policy';
import Agreement from './pages/policy/agreement';
import Specialists from './pages/specialists/specialists';
import Anna from './pages/specialists/anna/anna';
import Timur from './pages/specialists/timur/timur';
import Maria from './pages/specialists/maria/maria';
import Blog from './pages/blog/blog';
import Tests from './pages/tests/tests';

import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Howwork />
      <Assortment />
      <Form />
      <SpecialistsSection />
      <Result />
      <Place />
      <Map />
      <Help />
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
          <Route path='/services' element={<Services />} />
          <Route path='/specialists' element={<Specialists />} />
          <Route path='/specialists/anna' element={<Anna />} />
          <Route path='/specialists/timur' element={<Timur />} />
          <Route path='/specialists/maria' element={<Maria />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/tests' element={<Tests />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
