import React from 'react';
import { GoTrashcan } from 'react-icons/go';

const PokemonFavItem = ({pokemon}) => {


    return (
        <div className=" flex bg-purple-500 backdrop-blur rounded-md shadow-md shadow-slate-500 active:shadow-lg active:shadow-slate-500 " >
            <div className=' flex justify-center items-center w-52 rounded-md bg-red-500 backdrop-blur' >
                <img className='w-full' src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className=' w-full flex flex-col  justify-center' >
                <p className=' text-2xl first-letter:capitalize text-white font-bold text-center' >{pokemon.name}</p>
                <button className=' self-center w-12  flex items-center justify-center bg-white rounded-md text-purple-500 p-2 active:scale-75 transition-all ' > <GoTrashcan size="30px" /> </button>
            </div>
        </div>
    );
}

export default PokemonFavItem;