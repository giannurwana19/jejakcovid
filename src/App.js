import Footer from './components/Footer';
import Header from './components/Header';
import SelectCountry from './components/SelectCountry';
import CardCases from './components/CardCases';

function App() {
  return (
    <div className="container relative mx-auto px-4 mt-3">
      <Header />
      <SelectCountry />
      <CardCases />
      <Footer />
    </div>
  );
}

export default App;
