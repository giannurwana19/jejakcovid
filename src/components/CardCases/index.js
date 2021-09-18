import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/action';
import CardCaseItem from '../CardCaseItem';

const CardCases = () => {
  const dispatch = useDispatch();
  const { data, country } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData(country));
  }, [country, dispatch]);

  return (
    <div className="mt-5 flex-1">
      <h2 className="text-3xl font-bold text-gray-700 text-center">
        {country ? country : 'Dunia'}
      </h2>
      <div className="grid gap-6 grid-cols-12 mt-5 row-auto">
        <CardCaseItem
          title="Kasus Aktif"
          data={data.active}
          bgColor="bg-yellow-200"
        />
        <CardCaseItem
          title="Kasus Positif"
          data={data.cases}
          increment={data.todayCases}
          bgColor="bg-blue-200"
        />
        <CardCaseItem
          title="Kasus Sembuh"
          data={data.recovered}
          increment={data.todayRecovered}
          bgColor="bg-green-200"
        />
        <CardCaseItem
          title="Kasus Meninggal"
          data={data.deaths}
          increment={data.todayDeaths}
          bgColor="bg-red-200"
        />
      </div>
    </div>
  );
};

export default CardCases;
