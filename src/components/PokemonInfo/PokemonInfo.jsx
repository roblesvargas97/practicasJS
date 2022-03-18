
import React from 'react'
import { useSelector } from 'react-redux';

const PokemonInfo = () => {

    const infoPokemon = useSelector(state => state.pokemon.infoPokemon);
    const stateInfo = useSelector(state => state.ui.stateInfo);


    console.log(infoPokemon);
    return (
       <div className=' fixed w-full top-[10vh] h-[90vh]  bg-purple-500/30 backdrop-blur z-10' >
            <section className=' overflow-y-scroll' >
                <button>X</button>
                <div>
                    <img src={infoPokemon.sprites.front_default} alt={infoPokemon.name} />
                </div>
                <div>
                    <h2>Nombre: {infoPokemon.name.charAt(0).toUpperCase() + infoPokemon.name.slice(1) }</h2>
                    <h3>Tipo de Pokemon: {infoPokemon.types[0].type.name.charAt(0).toUpperCase() + infoPokemon.types[0].type.name.slice(1) }</h3>
        
                    <div className=' bg-slate-600'>
                        <h3>Movimientos</h3>
                        <div className=' h-40 bg-red-400 overflow-y-scroll'>
                            {infoPokemon.moves.map((element,index) => (
                                <p key={index} className="first-letter:capitalize" >{element.move.name}</p>
                            ))}
                        </div>
                    </div>

                    <div className=' bg-slate-600'>
                        <h3>Estadisticas</h3>
                        <div className=' h-40 bg-red-400 overflow-y-scroll'>
                            {infoPokemon.stats.map((element,index) => (
                                <p key={index} className="first-letter:capitalize" >{element.stat.name}: <span>{element.base_stat}</span> </p>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
       </div>
    );
}

export default PokemonInfo;