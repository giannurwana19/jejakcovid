export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_DATA = 'SET_DATA';
export const SET_DARKMODE = 'SET_DARKMODE';

const initialState = {
  data: [],
  country: {
    name: 'Indonesia',
    image: 'https://disease.sh/assets/img/flags/id.png',
    active: 0,
    cases: 0,
    todayCases: 0,
    recovered: 0,
    todayRecovered: 0,
    deaths: 0,
    todayDeaths: 0,
  },
  countries: [],
  timeUpdate: new Date().getTime(),
  darkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        timeUpdate: action.payload.update,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
