import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import Assortment2 from './pages/home/assortment_replace/assortment2';

// Отдельные страницы
import About from './pages/about/about';
import Policy from './pages/policy/policy';
import Agreement from './pages/policy/agreement';
import Cookies from './pages/policy/cookies';
import Specialists from './pages/specialists/specialists';
import Arina from './pages/specialists/arina/arina';
import Valeria from './pages/specialists/valeria/valeria';
import Ulia from './pages/specialists/ulia/ulia';
import Blog from './pages/blog/blog';
import Tests from './pages/tests/tests';
import Contacts from './pages/contacts/contacts';
import Page_404 from './pages/404/page_404';
import Oplata from './pages/oplata/oplata';

function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Howwork />
      <Assortment2 />
      <SpecialistsSection />
      <Form />
      <Result />
      <Map />
      <Help />
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
          <Route path='/specialists/arina' element={<Arina />} />
          <Route path='/specialists/valeria' element={<Valeria />} />
          <Route path='/specialists/ulia' element={<Ulia />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/tests' element={<Tests />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/cookie' element={<Cookies />} />
          <Route path='/oplata' element={<Oplata />} />
          <Route path="*" element={<Page_404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
