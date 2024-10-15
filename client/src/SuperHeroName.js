import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroName } from './hooks/useSuperHeroName'

const SuperHeroName = () => {
    const {heroId} = useParams()

    const {isLoading, data, isError ,error ,isFetching} = useSuperHeroName(heroId);
    if (isLoading){
        console.log("loading2")
        return <p>LOADING....</p>
    }
    if (isFetching){
        console.log("fetching")
    }
    if (isError){
        return <p>{error.message}</p>
    }
  return (
    <div>{data?.data.name}</div>
  )
}

export default SuperHeroName