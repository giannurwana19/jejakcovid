import classNames from 'classnames';
import CountUp from 'react-countup';

const CardCaseItem = ({
  title = 'Kasus covid',
  data = {},
  bgColor = 'bg-gray-200',
  increment,
}) => (
  <div
    className={classNames(
      'col-span-12 md:col-span-6 p-4 border border-gray-300 rounded-lg text-center transition hover:shadow-xl',
      bgColor
    )}>
    😲
    <h2 className="text-xl font-semibold">{title}</h2>
    <h2 className="text-2xl font-semibold text-gray-500">
      {' '}
      <CountUp start={0} end={data} duration={2} separator="," />
    </h2>
    {increment > 0 ? (
      <small className="text-xs font-bold px-2 rounded-lg bg-gray-500 text-gray-100">
        +
        <CountUp start={0} end={increment} duration={2} separator="," />
      </small>
    ) : null}
  </div>
);

export default CardCaseItem;
