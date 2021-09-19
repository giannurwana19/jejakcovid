import CountUp from 'react-countup';

const CardCaseItem = ({
  title,
  data,
  bgColor,
  bgColorHover,
  increment,
  icon,
  isActiveCase = false,
}) => (
  <div
    className={`col-span-12 md:col-span-6 p-4 rounded-2xl text-center transition ${bgColor} hover:${bgColorHover} hover:shadow-xl`}>
    <div className="text-4xl mb-2">{icon}</div>
    <h2 className="text-xl font-semibold">{title}</h2>
    <h2 className="text-2xl font-semibold text-gray-500">
      {' '}
      <CountUp start={0} end={data} duration={2} separator="," />
    </h2>
    {isActiveCase || (
      <small className="text-xs font-bold px-2 rounded-lg bg-gray-500 text-gray-100">
        {increment > 0 && '+'}
        <CountUp start={0} end={increment} duration={2} separator="," />
      </small>
    )}
  </div>
);

export default CardCaseItem;
