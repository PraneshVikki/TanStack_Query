import axios from 'axios'
import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useSuperHero ,useSuperHeroAdd } from './hooks/useSuperHero'
import { Link } from 'react-router-dom'
import { useSuperHeroName   } from './hooks/useSuperHeroName'

const RQsuperHero = () => {
    const {mutate} = useMutation(useSuperHeroAdd,);

    const handleAdd = () =>{
        mutate({
            "id":4,
            "name":"pranesh",
            "enemy":"vv"
            })
    }

    const onSuccess = ()=>{
        console.log("S")
    }
    const onError = ()=>{
        console.log("E")
    }
    const {isLoading, data, isError ,error ,isFetching} = useSuperHero(onSuccess,onError)


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
    
    <div>
        {data?.data.map((d)=>(
        <div key={d.id}>
            <Link to={`/RQsuperHero/${d.id}`}>{d.name}</Link>
        </div>
    ))}
    <button onClick={handleAdd}>Handle Add</button>
    
    </div>
  )
}

export default RQsuperHero