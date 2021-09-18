import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/action';
import CardCaseItem from '../CardCaseItem';

const CardCases = () => {
  const dispatch = useDispatch();
  const { data, country } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData(country.name));
  }, [country, dispatch]);

  console.log(country);

  return (
    <div className="mt-3 flex-1">
      <div className="text-center flex justify-center items-center">
        <img
          src={country.image}
          className="inline-block my-2 object-fit w-10 h-7"
          alt={country.name}
        />
        <h2 className="text-2xl ml-3 font-bold text-gray-700 text-center">
          {country?.name ? country?.name : 'Dunia'}
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-12 mt-3 row-auto">
        <CardCaseItem
          title="Kasus Aktif"
          data={data.active}
          bgColor="bg-yellow-200"
          bgColorHover="bg-yellow-300"
          icon="😲"
          isActiveCase
        />
        <CardCaseItem
          title="Kasus Positif"
          data={data.cases}
          increment={data.todayCases}
          bgColor="bg-blue-200"
          bgColorHover="bg-blue-300"
          icon="😷"
        />
        <CardCaseItem
          title="Kasus Sembuh"
          data={data.recovered}
          increment={data.todayRecovered}
          bgColor="bg-green-200"
          bgColorHover="bg-green-300"
          icon="😀"
        />
        <CardCaseItem
          title="Kasus Meninggal"
          data={data.deaths}
          increment={data.todayDeaths}
          bgColor="bg-red-200"
          bgColorHover="bg-red-300"
          icon="😭"
        />
      </div>
    </div>
  );
};

export default CardCases;
