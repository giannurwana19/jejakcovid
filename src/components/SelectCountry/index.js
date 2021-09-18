import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, setCountry } from '../../redux/action';

const SelectCountry = () => {
  const { country, countries } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="mt-5 text-center">
      <h1 className="text-lg text-gray-500 mb-3">Pilih Negara</h1>
      <select
        value={country}
        onChange={e => dispatch(setCountry(e.target.value))}
        className="px-5 py-1 border">
        <option value="">Dunia</option>
        {countries.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
