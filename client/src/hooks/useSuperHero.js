import axios from 'axios'
import { useQueries, useQuery } from 'react-query'

export const useSuperHero = (onSuccess,onError)=>{
    return useQuery('super-hero',()=>{
    return axios.get('http://localhost:4000/superhero')
},{
    onSuccess,
    onError
})}


export const useSuperHeroAdd = (Hero)=>{
    axios.post('http://localhost:4000/superhero',Hero);
}


/* const fetchSuperHeroById = (id) => {
    return axios.get(`http://localhost:4000/superhero/${id}`);
  };
  

  export const useFecthedData = ({ heroIds }) => {
    const queryResult = useQueries(
      heroIds.map((id) => {
        return{
        queryKey: ['fetch-hero', id],
        queryFn: () => fetchSuperHeroById(id),
      }
    }));
    console.log(queryResult)
  }; */

  const fetchSuperHero = ({heroId}) => {
    console.log(heroId)
    return {}
/*     const q = axios.get(`http://localhost:4000/superhero/${heroId}`)
    console.log(q);
    return q */
  }
  
  export const useDynamicParallelPage = ({ heroIds }) => {
    const queryResults = useQueries(
      heroIds.map(id => {
        
        return {
          queryKey: ['super-hero', id],
          queryFn: () => fetchSuperHero({ heroIds: id })

        }
      })
    )
    console.log({ queryResults })}