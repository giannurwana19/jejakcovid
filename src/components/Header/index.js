import moment from 'moment';
import { useSelector } from 'react-redux';

const Header = () => {
  const { timeUpdate } = useSelector(state => state);

  return (
    <header>
      <h1 className="text-4xl font-bold text-center mb-2">Jejak Covid 19</h1>
      <h2 className="text-center">
        Diupdate pada hari {moment(timeUpdate).format('LLLL')}
      </h2>
    </header>
  );
};

export default Header;
