import logo from './logo.svg';
import './App.css';
import SuperHero from './SuperHero.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import {QueryClientProvider , QueryClient} from 'react-query'
import RQsuperHero from './RQsuperHero.js';
import {ReactQueryDevtools} from 'react-query/devtools'
import SuperHeroName from './SuperHeroName.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

   useEffect(() => {
    axios
      .get('http://localhost:4000/superhero')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (isLoading) {
    console.log("loading")
    return <h1>Loading...</h1>;
  } 
  const queryClient = new QueryClient();  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Link to="/superheroo">superhero</Link>
<br />
      <Link to={"/RQsuperHero"}>RQsuperHero</Link>
      <Routes>
        <Route path="/superheroo" element={<SuperHero data={data}/>} />
        <Route path="/RQsuperHero/:heroId" element={<SuperHeroName />} />
        <Route path="/RQsuperHero" element={<RQsuperHero/>} />
      </Routes>
    </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    
  );
}

export default App;
