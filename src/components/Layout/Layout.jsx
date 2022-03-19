import React from 'react'
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import Footer from '../Footer/Footer';
import { setLoader, setPokemon } from '../../actions';
import useOnScreen from '../../utils/useOnScreen';
import { connect } from 'react-redux';
import Header from '../Header/Header';

const mapStateToProps = state => ({
    list: state.pokemon.list
})

const mapDispatchToProps = dispatch => ({
    setPokemons: value => dispatch(setPokemon(value)),
    setLoader: value => dispatch(setLoader(value)),
})


const Layout = ({children , list , setPokemons , setLoader}) => {

    const [ref , visible] = useOnScreen({rootMargin: "40px"});

    const [offsetState, setOffsetState] = React.useState(0);

    const useFetchPokemons = async (URL) => {
    
        try {
            const pokemonInfo = [];

            setLoader(true);
            const reponse = await fetch(URL);
            const data = await reponse.json();
            setLoader(false);
            
            for(const element of data.results){
                const responsePokemon = await fetch(element.url);
                const dataPokemon = await responsePokemon.json();
                pokemonInfo.push(dataPokemon);
            }
            setPokemons([...list ,...pokemonInfo]);
            
        } catch (error) {
            return console.log(error);
        }
        
    }

    const increaseOffset = () => {
        setOffsetState(prev=> prev + 100);
    }

     React.useEffect(() => {
        useFetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offsetState}&limit=100`);

    }, [])

    React.useEffect(()=> {
        increaseOffset();
        useFetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offsetState}&limit=100`);
    }, [visible])
    

    return (
        <React.Fragment>
            <HeaderMobile/>
            <Header/>
            {children}
            <div ref={ref}>
                <Footer/>
            </div>
        </React.Fragment>    
    
        
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(Layout);