import React from 'react'
import Layout from './components/Layout/Layout';
import PokemonList from './components/PokemonsList/PokemonList';
import { useSelector } from 'react-redux';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import PokemonFavs from './components/PokemonFavs/PokemonFavs';
import SearchComponent from './components/SearchComponent/SearchComponent';
import Loader from './components/Loader/Loader';


const App = () => {

    const stateInfo = useSelector(state => state.ui.stateInfo);
    const stateFav = useSelector(state => state.ui.stateFav);
    const stateSearcher = useSelector(state => state.ui.stateSearcher);
    const stateLoader = useSelector(state => state.ui.stateLoader);

    return (
        <Layout>
            {stateInfo && <PokemonInfo/> }
            { stateFav && <PokemonFavs/>}
            {stateSearcher && <SearchComponent/>}
            <PokemonList/>
            { <Loader/>}
        </Layout>
    );
}

export default App;