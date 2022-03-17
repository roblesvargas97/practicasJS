import React from 'react';

const PokemonCard = ({pokemonInfo}) => {

    
    
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <h1>{pokemonInfo.species.name}</h1>
        </div>
        
    );
}

export default PokemonCard;