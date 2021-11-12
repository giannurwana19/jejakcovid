import Header from './components/Header';
import SelectCountry from './components/SelectCountry';
import CardCases from './components/CardCases';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {
  const { darkMode } = useSelector(state => state);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen min-w-full dark:bg-gray-800">
        <div className="container relative mx-auto px-4 pt-4">
          <Header />
          <SelectCountry />
          <CardCases />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
