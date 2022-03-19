import React from 'react';
import { useSelector } from 'react-redux';
import PokemonFavItem from '../PokemonFavItem/PokemonFavItem';
import {FaSadCry} from 'react-icons/fa';

const PokemonFavs = () => {

    const stateFav = useSelector(state => state.ui.stateFav);
    const favsPokemon = useSelector(state => state.pokemon.favsPokemon);

    return (
        <section className={` fixed w-full h-[90vh] p-5 top-[10vh] bg-red-700/50 backdrop-blur  z-30 `}>
            <div className=' h-[80vh] bg-purple-500 rounded-md' >
                <h2 className=' text-2xl text-white font-bold text-center' >Favoritos</h2>
                <div className=' h-full bg-white rounded-b-md space-y-5 overflow-y-scroll p-5 ' >
                    {favsPokemon.length !== 0?
                        favsPokemon.map(element => (
                            <PokemonFavItem key={element.id} pokemon={element} />
                        ))
                        :
                        <div className=' w-full bg-red-500 rounded-md flex flex-col items-center justify-center p-5 shadow-md text-white shadow-slate-500 active:shadow-lg active:shadow-slate-500 ' >
                            <h3 className=' text-center text-2xl text-white font-bold' >Aun no has agregado ningun pokemon</h3>
                            <FaSadCry size="60px" />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default PokemonFavs;