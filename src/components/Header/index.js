import moment from 'moment';
import { useSelector } from 'react-redux';

const Header = () => {
  const { timeUpdate } = useSelector(state => state);

  return (
    <header>
      <div className="flex justify-center items-center mb-3">
        <img src="/logo.svg" className="w-10 md:w-12" alt="" />
        <h1 className="text-3xl md:text-4xl ml-2 font-bold text-center">
          Jejak Covid-19
        </h1>
      </div>
      <h2 className="text-center">
        Diupdate pada hari {moment(timeUpdate).format('LLLL')}
      </h2>
    </header>
  );
};

export default Header;
