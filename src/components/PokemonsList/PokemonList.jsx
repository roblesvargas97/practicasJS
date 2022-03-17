import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    list: state.pokemon.list
})

const PokemonList = ({list}) => {
    
    console.log(list);

    return (
       <section className=' w-full min-h-[90vh]'>
           {list.map((element , index) => {
                return <PokemonCard key={`${index}-${element.species.name}`} pokemonInfo={element} />
                // console.log(element);
           })}
       </section>
    );
}

export default connect(mapStateToProps) (PokemonList);