import axios from 'axios'
import { useQuery } from 'react-query'

const fetchById = ({querykey})=>{
    const heroUrl = querykey[1];
    return axios.get(`http://localhost:4000/${heroUrl}`)
}

export const useParallelQueries = (heroUrl)=>{
    return useQuery(['super-hero',heroUrl],fetchById)
}