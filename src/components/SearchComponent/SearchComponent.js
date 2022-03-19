import React from 'react'
import { GoSearch } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setPokemonInfo } from '../../actions/index';
import { toggleOpenInfo } from '../../actions';

const SearchComponent = () => {

    const [value, setvalue] = React.useState('')

    const dispatch = useDispatch();

    const fetchPokemon = async (value) => {

        try {
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
            const data = await response.json();
            dispatch(setPokemonInfo(data));
            dispatch(toggleOpenInfo(true));
            

        } catch (error) {
            console.log(error);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemon(value.toLocaleLowerCase());
    }

    const handleChange = (e) =>{
        setvalue(e.target.value);
    }

    return (
        <div className='fixed w-full h-[20vh] flex items-center justify-center bg-red-700/50 backdrop-blur  text-2xl top-[10vh] z-10 '>
            <form onSubmit={handleSubmit} className=' relative'>
                <input value={value} onChange={handleChange} className=' rounded-md p-2  transition-all focus:shadow-md focus:shadow-slate-50/20 focus:outline-none ' placeholder='Pikachu' type="text"></input>
                <button className=' absolute top-0 right-0 flex justify-center items-center w-12 h-full p-2 text-white rounded-md bg-purple-500 backdrop-blur '  type='submit'>
                    <GoSearch/>
                </button>
            </form>
        </div>
    );
}

export default SearchComponent;