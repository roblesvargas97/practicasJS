import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    list: state.pokemon.list
})

const PokemonList = ({list}) => {


    return (
       <section className=' w-full min-h-[0vh] flex flex-col items-center p-5 space-y-5 mt-[10vh] md:grid md:grid-cols-4 md:space-y-0  md:gap-10 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 '>
           {list.map((element , index) => {
                return <PokemonCard key={`${index}-${element.species.name}`} pokemonInfo={element} />
           })}
       </section>
    );
}

export default connect(mapStateToProps) (PokemonList);