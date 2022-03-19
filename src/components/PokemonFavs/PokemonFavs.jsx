import React from 'react';
import { useSelector } from 'react-redux';


const PokemonFavs = () => {

    const stateFav = useSelector(state => state.ui.stateFav);
    const favsPokemon = useSelector(state => state.pokemon.favsPokemon);

    console.log(favsPokemon);

    return (
        <section className={` fixed w-full h-[90vh] p-5 top-[10vh] bg-red-700/50 backdrop-blur  z-20 `}>
            <div className=' h-[80vh] bg-purple-500 rounded-md' >
                <h2 className=' text-2xl font-bold text-center' >Favoritos</h2>
                <div className=' h-full bg-white rounded-b-md ' >
                    {favsPokemon.map(element => (
                        <p>{element.name}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PokemonFavs;