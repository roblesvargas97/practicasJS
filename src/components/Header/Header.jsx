import React from 'react';
import {GoSearch , GoHeart} from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { openPokemonFav, openSearcher } from '../../actions/index';

const Header = () => {
   
    const dispatch = useDispatch();
    const stateFav = useSelector(state => state.ui.stateFav);
    const favsPokemon = useSelector(state => state.pokemon.favsPokemon);
    const stateSearcher = useSelector(state => state.ui.stateSearcher);

    const openFav = () => {
        dispatch(openPokemonFav(!stateFav));
    }

    const openSearch = () => {
        dispatch(openSearcher(!stateSearcher));
    }

    return (
        <div className=' w-full fixed top-0 left-0 h-[10vh] hidden lg:flex justify-between items-center px-5 bg-red-500 min-w-[320px] z-10 '>
            <img className=' w-36 h-14' src="https://i.imgur.com/7CNuKSf.png" alt="pokemon logo" />
            <div className=' w-[35%] flex justify-between'>
                <button onClick={ () =>openFav()} className="relative flex items-center justify-center text-purple-500 rounded-md bg-white/60 backdrop-blur p-2 shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 cursor-pointer active:scale-90 space-x-5 transition-all">    
                    <GoHeart size="30px"/>
                    <span className=' text-2xl font-bold'>Favoritos</span>
                    { favsPokemon.length!==0 && <span className="absolute top-[-3px] right-[-3px] rounded-full  w-3 h-3 bg-white animate-pulse"></span> }
                </button>
                <button onClick={()=>openSearch()} className="relative flex items-center justify-center text-purple-500 rounded-md bg-white/60 backdrop-blur p-2 shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 cursor-pointer active:scale-90 space-x-5 transition-all">    
                    <GoSearch size="30px"/>
                    <span className=' text-2xl font-bold'>Busqueda</span>
                </button>
            </div>
        </div>
    );
}

export default Header;