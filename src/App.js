import React from 'react'
import Layout from './components/Layout/Layout';
import PokemonList from './components/PokemonsList/PokemonList';
import { useSelector } from 'react-redux';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';


const App = () => {

    const stateInfo = useSelector(state => state.ui.stateInfo);
    return (
        <Layout>
            {stateInfo && <PokemonInfo/>}
            <PokemonList/>
            
        </Layout>
    );
}

export default App;