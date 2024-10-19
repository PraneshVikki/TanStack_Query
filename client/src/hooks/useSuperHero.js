import axios from 'axios'
import { useQuery } from 'react-query'

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