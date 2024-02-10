import Header from './components/header/header';
import Hero from './components/hero/hero';
import Companies from './components/companies/companies';
import Residencies from './components/residencies/residencies';
import'./app.css'
import Value from './components/value/value';
import Contact from './components/contact/contact'
import Getstarted from './components/getstarted/getstrt'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default App;
