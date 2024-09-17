import './PokeList.css'
import { useSelector } from 'react-redux'
import PokeCard from '../PokeCard/PokeCard'

function PokeList() {


const { pokemons } = useSelector((state) => state.pokemons)


  return (
    <div className='poke-container' >
        {pokemons && pokemons.map((poke) => (
            <PokeCard key={poke.name} poke={poke}/>
        ))}
        
    </div>
  )
}

export default PokeList