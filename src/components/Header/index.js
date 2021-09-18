import moment from 'moment';
import { useSelector } from 'react-redux';

const Header = () => {
  const { timeUpdate } = useSelector(state => state);

  return (
    <header>
      <div className="flex justify-center items-center">
        <img src="/logo.svg" className="w-12" alt="" />
        <h1 className="text-4xl ml-2 font-bold text-center mb-3">
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
