import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenInfo } from '../../actions';
import { setPokemonInfo } from '../../actions/index';

const PokemonCard = ({pokemonInfo}) => {

    const dispatch = useDispatch();
    const infoPokemon = useSelector(state => state.pokemon.infoPokemon);

    const openInformation = (info)=> {
        dispatch(toggleOpenInfo());
        dispatch(setPokemonInfo(info));
        console.log(infoPokemon);
    }

    return (
        <div className='w-[70%] bg-purple-500 rounded-md shadow-md shadow-slate-500 active:shadow-lg active:shadow-slate-500 transition-all'>
            <div className='w-full  flex items-center justify-center rounded-t-md  bg-purple-500/30 backdrop-blur'>
                <img className=' w-32' src={pokemonInfo.sprites.front_default} alt="image" />
            </div>
            <div className='bg-red-500 flex flex-col rounded-b-md items-center justify-center p-2 space-y-2' >
                <h1 className=' first-letter:capitalize font-bold text-white text-2xl '>{pokemonInfo.species.name}</h1>
                <button onClick={()=>openInformation(pokemonInfo)} className=' w-[50%] flex items-center justify-center text-purple-500 font-bold text-lg rounded-md bg-white px-3 py-1 shadow-sm cursor-pointer active:scale-95 transition-all ' type='button' >
                    Mas Info
                </button>
            </div>
        </div>
        
    );
}

export default  (PokemonCard);