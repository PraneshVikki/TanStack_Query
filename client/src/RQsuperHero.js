import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useSuperHero, useSuperHeroAdd, useFecthedData ,useDynamicParallelPage} from './hooks/useSuperHero';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  const { data: product_data } = useQuery("Product-details", async () => {
    return await axios.get('http://localhost:3001/details');
  });
  console.log(product_data)
  
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
  //console.log(data)

  const LocalItems = JSON.parse(localStorage.getItem("Items")) || [];
  LocalItems.push([0])
  localStorage.setItem("Items",JSON.stringify(LocalItems));
  const e = JSON.parse(localStorage.getItem("Items"));
  console.log(e)

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
