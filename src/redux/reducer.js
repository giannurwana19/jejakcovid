export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_DATA = 'SET_DATA';

const initialState = {
  data: [],
  country: 'Indonesia',
  countries: [],
  timeUpdate: new Date().getTime(),
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
    default:
      return state;
  }
};

export default reducer;
