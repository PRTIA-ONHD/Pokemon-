import PropTypes from 'prop-types';
import './GridCard.css';
import Detail from '../Details/Detail';

function PokeCard({ poke }) {

  
  return (
    
    <div className='card'>

        <div className='card-image'>
          {poke.sprites.other.home.front_default && (
              <img src={poke.sprites.other.home.front_default} alt={poke.name} />
          )}
        </div>
        <div className='card-content'>
            <h1>{poke.name}</h1>
            <ul>
                {poke.abilities.map((ability, idx) => (

                     <div className='ability-style' key={idx}>
                     {ability.ability.name}
                 </div>

                ))}
            </ul>
            <Detail/>
        </div>


    </div>
  );
}

PokeCard.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        home: PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })),
  }).isRequired,
};

export default PokeCard;
