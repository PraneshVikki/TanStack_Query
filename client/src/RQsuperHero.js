import React from 'react';
import { useMutation } from 'react-query';
import { useSuperHero, useSuperHeroAdd, useFecthedData ,useDynamicParallelPage} from './hooks/useSuperHero';
import { Link } from 'react-router-dom';

const RQsuperHero = () => {
  const { mutate } = useMutation(useSuperHeroAdd);

  const handleAdd = () => {
    mutate({
      id: 4,
      name: 'pranesh',
      enemy: 'vv',
    });
  };

  /* const { data: fetchedData } = useDynamicParallelPage({ heroIds: [1,2] }); */

  const onSuccess = () => {
    console.log('Fetch Success');
  };

  const onError = () => {
    console.log('Fetch Error');
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHero(onSuccess, onError);

  if (isLoading) return <p>LOADING....</p>;
  if (isFetching) console.log('fetching');
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      {data?.data.map((d) => (
        <div key={d.id}>
          <Link to={`/RQsuperHero/${d.id}`}>{d.name}</Link>
        </div>
      ))}
      <button onClick={handleAdd}>Handle Add</button>

    </div>
  );
};

export default RQsuperHero;
