import { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Indonesia');

  useEffect(() => {
    const fetchData = async paramCountry => {
      let url = 'https://disease.sh/v3/covid-19/all';

      if (paramCountry) {
        url = `https://disease.sh/v3/covid-19/countries/${paramCountry}`;
      }

      const { data } = await axios.get(url);

      setData(data);
    };

    const fetchCountries = async () => {
      const { data } = await axios.get(
        'https://disease.sh/v3/covid-19/countries'
      );

      const countries = data.map(country => country.country);

      setCountries(countries);
    };

    fetchCountries();
    fetchData(country);
  }, [country]);

  return (
    <div className="container max-h-screen mx-auto px-4 mt-4">
      <Header />
      <div className="mt-5 text-center">
        <h1 className="text-lg text-gray-500 mb-3">Pilih Negara</h1>
        <select
          value={country}
          onChange={e => setCountry(e.target.value)}
          className="px-5 py-1 border"
          id="">
          <option value="">Dunia</option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 flex-1">
        <h2 className="text-3xl font-bold text-gray-700 text-center">
          {country ? country : 'Dunia'}
        </h2>
        <div className="grid gap-5 grid-cols-12 mt-5 row-auto">
          <div className="col-span-12 md:col-span-6 p-4 border border-gray-300 bg-yellow-200  rounded-lg text-center">
            😲
            <h2 className="text-xl font-semibold">Kasus Aktif</h2>
            <h2 className="text-2xl font-semibold text-gray-500">
              {' '}
              <CountUp start={0} end={data.active} duration={2} separator="," />
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 p-4 border border-gray-300 bg-blue-200  rounded-lg text-center">
            😷
            <h2 className="text-xl font-semibold">Kasus Positif</h2>
            <h2 className="text-2xl font-semibold text-gray-500">
              {' '}
              <CountUp start={0} end={data.cases} duration={2} separator="," />
            </h2>
            {data.todayCases > 0 && (
              <small className="text-xs font-bold px-2 rounded-lg bg-gray-500 text-gray-100">
                +
                <CountUp
                  start={0}
                  end={data.todayCases}
                  duration={2}
                  separator=","
                />
              </small>
            )}
          </div>
          <div className="col-span-12 md:col-span-6 p-4 border border-gray-300 bg-green-200  rounded-lg text-center">
            🤗
            <h2 className="text-xl font-semibold">Kasus Sembuh</h2>
            <h2 className="text-2xl font-semibold text-gray-500">
              {' '}
              <CountUp
                start={0}
                end={data.recovered}
                duration={2}
                separator=","
              />
            </h2>
            {data.todayRecovered > 0 && (
              <small className="text-xs font-bold px-2 rounded-lg bg-gray-500 text-gray-100">
                +
                <CountUp
                  start={0}
                  end={data.todayRecovered}
                  duration={2}
                  separator=","
                />
              </small>
            )}
          </div>
          <div className="col-span-12 md:col-span-6 p-4 border border-gray-300 bg-red-200  rounded-lg text-center">
            😥
            <h2 className="text-xl font-semibold">Kasus Meninggal</h2>
            <h2 className="text-2xl font-semibold text-gray-500">
              {' '}
              <CountUp start={0} end={data.deaths} duration={2} separator="," />
            </h2>
            {data.todayDeaths > 0 && (
              <small className="text-xs font-bold px-2 rounded-lg bg-gray-500 text-gray-100">
                +
                <CountUp
                  start={0}
                  end={data.todayDeaths}
                  duration={2}
                  separator=","
                />
              </small>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
