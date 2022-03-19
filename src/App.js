import React from 'react'
import Layout from './components/Layout/Layout';
import PokemonList from './components/PokemonsList/PokemonList';
import { useSelector } from 'react-redux';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import PokemonFavs from './components/PokemonFavs/PokemonFavs';


const App = () => {

    const stateInfo = useSelector(state => state.ui.stateInfo);
    const stateFav = useSelector(state => state.ui.stateFav);
    return (
        <Layout>
            {stateInfo&&<PokemonInfo/> }
            { stateFav && <PokemonFavs/>}
            <PokemonList/>
        </Layout>
    );
}

export default App;