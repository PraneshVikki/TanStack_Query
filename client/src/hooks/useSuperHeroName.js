import axios from 'axios'
import { useQuery } from 'react-query'

const fetchById = ({querykey})=>{
    const heroId = querykey[1];
    return axios.get(`http://localhost:4000/superhero/${heroId}`)
}

export const useSuperHeroName = (heroId)=>{
    return useQuery(['super-hero',heroId],fetchById)
}