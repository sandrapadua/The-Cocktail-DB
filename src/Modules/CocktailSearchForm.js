import React from 'react';
import { useEffect, useState } from "react"
import CocktailList from '../Modules/CocoktailList'
import '../Styles/Style.css'
const CocktailSearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (searchQuery.length) {
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              const firstFiveResults = data?.drinks?.slice(0, 5); // To limit the results to the first five
              setResults(firstFiveResults);            
            });
        }
      };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
      }; 

  return (
    <div className="cocktail-search-form">
    <form onSubmit={handleSubmit} className="search-form">
    <div className="column">
        <label htmlFor="search" className="search-label">Find a cocktail by name</label>
    </div>
    <div className="column">
      <input className="search-input" id="search" name="search" type="search" value={searchQuery} onChange={handleChange} />
    </div>       
    <div className="column">
      <button className="search-button" type="submit">Search</button>
    </div>
    </form>
    <CocktailList results={results}/>
    </div>
  );
};

export default CocktailSearchForm;
 