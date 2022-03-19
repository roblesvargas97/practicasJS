
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {GoX} from 'react-icons/go';
import { toggleOpenInfo } from '../../actions';

const PokemonInfo = () => {

    const [animationExit, setanimationExit] = React.useState(false);

    const infoPokemon = useSelector(state => state.pokemon.infoPokemon);
    const stateInfo = useSelector(state => state.ui.stateInfo);
    const dispatch = useDispatch();

    const onClickClose = () => {
        setTimeout(() => {
            setanimationExit(true);
            setTimeout(() => {
                dispatch(toggleOpenInfo(false));
            }, 800);
        }, 200);
    }

    return (
       <div className={`pokemon-info fixed w-full top-[10vh] ${stateInfo? 'animate-entry': null} ${animationExit? 'animate-exit' : null } h-[90vh] bg-purple-700/50 backdrop-blur z-20 transition-all`} >
            <section className=' p-5 flex flex-col items-center space-y-2 ' >
                <button onClick={onClickClose} className=' w-[15%] flex self-end items center justify-center p-2 cursor-pointer bg-white/60 backdrop-blur rounded-md text-purple-500 shadow-md shadow-slate-500 active:shadow-lg active:shadow-slate-500 transition-all active:scale-75 '>
                    <GoX size='30px' />                
                </button>
                <div className='flex justify-center items-center w-32 bg-red-500 rounded-md '>
                    <img className='' src={infoPokemon.sprites.front_default} alt={infoPokemon.name} />
                </div>
                <div className=' space-y-2'>
                    <h2 className=' text-center text-xl font-bold text-white' >Nombre: <span className=' font-light' >{infoPokemon.name.charAt(0).toUpperCase() + infoPokemon.name.slice(1)}</span> </h2>
                    <h3 className=' text-center text-xl font-bold text-white' >Tipo de Pokemon: <span className=' font-light' >{infoPokemon.types[0].type.name.charAt(0).toUpperCase() + infoPokemon.types[0].type.name.slice(1) }</span> </h3>
        
                    <div className=' bg-red-500 rounded-md '>
                        <h3 className=' text-center text-xl font-bold text-white' >Movimientos</h3>
                        <div className=' h-20 rounded-b-md overflow-y-scroll p-2 bg-purple-500'>
                            {infoPokemon.moves.map((element,index) => (
                                <p key={index} className=" text-center text-xl font-light text-white first-letter:capitalize" >{element.move.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className=' bg-red-500 rounded-md '>
                        <h3 className='text-center text-xl font-bold text-white' >Estadisticas</h3>
                        <div className=' h-40 rounded-b-md overflow-y-scroll p-2 bg-purple-500'>
                            {infoPokemon.stats.map((element,index) => (
                                <p key={index} className=" text-base text-white font-bold first-letter:capitalize" >{element.stat.name}: <span className=' font-light' >{element.base_stat}</span> </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
       </div>
    );
}

export default PokemonInfo;