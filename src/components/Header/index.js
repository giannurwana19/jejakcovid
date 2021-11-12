import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { setDarkMode } from '../../redux/action';

const Header = () => {
  const { timeUpdate, darkMode } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <header className="dark:text-gray-200">
      <div className="flex justify-center items-center mb-3">
        <img src="/logo.svg" className="w-8 md:w-10" alt="" />
        <h1 className="text-3xl md:text-4xl ml-2 font-bold text-center">
          Jejak Covid-19
        </h1>
        <button
          type="button"
          className="text-sm ml-3 dark:bg-gray-50 dark:text-gray-900 bg-white border cursor-pointer rounded-md px-2 py-1 hover:shadow-lg"
          onClick={() => dispatch(setDarkMode(!darkMode))}>
          {darkMode ? '🌔' : '🌒'}
        </button>
      </div>
      <h2 className="text-center">
        Diupdate pada hari {moment(timeUpdate).format('LLLL')}
      </h2>
    </header>
  );
};

export default Header;
