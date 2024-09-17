import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from './Reducer'

export default configureStore({
    reducer: {
        pokemons: pokemonSlice
    }
})