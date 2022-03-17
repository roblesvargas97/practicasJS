import React from 'react'
import Layout from './components/Layout/Layout';
import PokemonList from './components/PokemonsList/PokemonList';

const App = () => {
    return (
        <Layout>
            <PokemonList/>

        </Layout>
    );
}

export default App;