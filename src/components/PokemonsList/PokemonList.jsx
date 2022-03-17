import React from 'react'
import { connect } from 'react-redux';
import useOnScreen from '../../utils/useOnScreen';
import { setPokemon } from '../../actions';

const mapStateToProps = state => ({
    list: state.pokemon.list
})

const mapDispatchToProps = dispatch => ({
    setPokemons: value => dispatch(setPokemon(value))
})



const PokemonList = ({list , setPokemons}) => {
   
    const [ref , visible] = useOnScreen({rootMargin: "0px"});

    const [offsetState, setOffsetState] = React.useState(100);
    
    const useFetchPokemons = async (URL) => {
    
        try {
            const reponse = await fetch(URL);
            const data = await reponse.json();
            // console.log(data.results);
            setPokemons([...list,...data.results]);
    
        } catch (error) {
            return console.log(error);
        }
        
    }

    const increaseOffset = () => {
        setOffsetState(prev=> prev + 100);
    }

    React.useEffect(()=> {
        increaseOffset();
        useFetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offsetState}&limit=100`);
    }, [visible])
    
    

    React.useEffect(() => {
        useFetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offsetState}&limit=100`);

    }, [])
    
    return (
       <React.Fragment>
           {list.map((element , index) => {
                if(index + 1 === list.length){
                    return <h1 key={`${index}-${element.name}`} ref={ref} >{element.name}</h1>

                }else{
                    return <h1 key={`${index}-${element.name}`}>{element.name}</h1>
                }
           })}
       </React.Fragment>
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(PokemonList);