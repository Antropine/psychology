import './App.css';
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrolll//ScrollToTop'

// Шаред компоненты
import Header from './components/header/header';
import Footer from './components/footer/footer';

// Секции главной страницы
import Hero from './pages/home/hero/hero';
import Advantages from './pages/home/advantages/advantages';
import Howwork from './pages/home/howwork/howwork';
import Form from './pages/home/form/form';
import SpecialistsSection from './pages/home/specialists/specialists';
import Result from './pages/home/result/result';
import Map from './pages/home/map/map';
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
import Page404 from './pages/404/page_404';
import Oplata from './pages/oplata/oplata';
import Cookie from './pages/cookie/cookie';

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
        <ScrollToTop />
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
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Cookie />
        <Footer />
      </div>
    </div>
  );
}

export default App;
