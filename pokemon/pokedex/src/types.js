import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './styles.css';

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchcardFilters = async () =>{
        try{
            const response = await fetch('https://pokeapi.co/api/v2/type/');
        }
        catch(error){
            ;
        }
    };
    fetchcardFilters(); 
  }, []);

  if (isLoading) {
    return <div>Please wait</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BrowserRouter className="types">
        <div className="types">
            <ul>
                {types.map((type, index) => (
                    <li key={index}>{type.name}</li>
                ))}
            </ul>
        </div>
    </BrowserRouter>
  );
}

export default types;

