import axios from 'axios';
import { SET_COUNTRIES, SET_COUNTRY, SET_DATA } from './reducer';

export const fetchData = paramCountry => async dispatch => {
  let url = 'https://disease.sh/v3/covid-19/all';

  if (paramCountry) {
    url = `https://disease.sh/v3/covid-19/countries/${paramCountry}`;
  }

  const { data } = await axios.get(url);

  dispatch({ type: SET_DATA, payload: data });
};

export const fetchCountries = () => async dispatch => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');

  const countries = data.map(country => ({
    name: country.country,
    image: country.countryInfo.flag,
  }));

  dispatch({ type: SET_COUNTRIES, payload: countries });
};

export const setCountry = country => async dispatch => {
  const { data } = await axios.get(
    `https://disease.sh/v3/covid-19/countries/${country}`
  );

  dispatch({
    type: SET_COUNTRY,
    payload: {
      name: data.country,
      image: data.countryInfo?.flag ? data.countryInfo?.flag : './globe.jpg',
      active: data.active,
      cases: data.cases,
      todayCases: data.todayCases,
      recovered: data.recovered,
      todayRecovered: data.todayRecovered,
      deaths: data.deaths,
      todayDeaths: data.todayDeaths,
    },
  });
};
