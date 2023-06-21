import React from 'react';
import { useEffect, useState } from "react"
import '../Styles/Style.css'

const CocoktailList = (props) => {
  return (
    <div className='cocktail-list-container'>
         {props?.results ? 
                    (<div className="cocktail-row">
         {props?.results?.map((drink) => (
            <div key={drink.idDrink} className="cocktail-item">
            <div className="drink-details">

          <h2>{drink.strDrink}</h2>
          <h4>Ingredient</h4>
          <ul>
                {Object.entries(drink)
                    .filter(([key, value]) => key.startsWith('strIngredient') && value)
                    .map(([key, ingredient]) => {
                    const measureKey = `strMeasure${key.slice(-1)}`;
                    const measure = drink[measureKey];
                    
                    return (
                        <li key={key} >
                        {ingredient}
                        {measure && <span> - {measure}</span>}
                      </li>
                    );
                    })}
          </ul>
          {drink.strDrinkThumb && <img src={drink.strDrinkThumb} alt={drink.strDrink} className="drink-image"
        />}
    </div>

        </div>
      ))}
      </div>):
     <p>No results found.</p> 
    }

    </div>
  );
};

export default CocoktailList;
